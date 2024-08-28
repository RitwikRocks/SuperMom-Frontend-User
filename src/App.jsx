import React, { useContext, useEffect } from 'react'
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Appointment from './pages/Appointment.jsx';
import AboutUs from './pages/AboutUs';
import Register from './pages/Register';
import Login from './pages/Login';
import ProductOne from './pages/ProductOne.jsx';
import Home from './pages/Home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar.jsx';
import { Context } from './main.jsx';
import axios from 'axios';
import Footer from './components/Footer.jsx';
import Product from './pages/Product.jsx';
import Cart from './pages/Cart.jsx';
import {useSelector,useDispatch} from 'react-redux';
import { Outlet } from 'react-router-dom';
import {setDataProduct} from './features/productSlice.js';
import './App.css';




const App = () => {

  const {isAuthenticated,setIsAuthenticated,setUser} = useContext(Context);
  
 
  useEffect(() => {
    console.log("App.jsx",isAuthenticated);
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/patient/me",
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        console.log("Error while fetching patient");
        setUser({});
      }
    };
    fetchUser();
  }, [isAuthenticated]);


  const dispatch = useDispatch()
 
  useEffect(()=>{
      ( async()=>{
        await axios.get(
          "http://localhost:4000/api/v1/product/getall",
        ).then((response)=>{
           console.log(response.data.products);
           const resData =response.data.products;
           dispatch(setDataProduct(resData))
        }
        ).catch(error=>console.log(error));
      }
       )()
  },[]);
  const productData = useSelector((state)=>state.product?.productList);
  console.log("Product data",productData);
  


  return (
    <>
   
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/appointment" element={<Appointment/>}/>
        <Route path="/product"  element={<Product/>}/> 
        <Route path="product/:filterby" element={<ProductOne/>}/>
        <Route path="cart" element={<Cart />} />
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Outlet/>
      <Footer/>
      <ToastContainer position='top-center'/>
    </Router>
    </>
  )
}

export default App