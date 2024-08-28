import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";
import { useSelector } from "react-redux";
import { BsCartFill } from "react-icons/bs";
// import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {
    const [show, setShow] = useState(false);
    const { isAuthenticated, setIsAuthenticated } = useContext(Context);
    const url = window.location.href;
    const [isCartAuthenticated,setIsCartAuthenticated]= useState(false);
  
  
    const handleLogout = async () => {
      await axios
        .get("http://localhost:4000/api/v1/user/patient/logout", {
          withCredentials: true,
        })
        .then((res) => {
          toast.success(res.data.message);
          setIsAuthenticated(false);
          console.log("Success Occured");
          setIsCartAuthenticated(false);
        })
        .catch((err) => {
            console.log("Error occured");
          toast.error(err.response.data.message);
        });
    };
    const cartItemNumber = useSelector((state)=>state.product.cartItem);
    
    useEffect(
       function cart(){
         if(isAuthenticated===true && (url.includes("product")==true))
         {
          setIsCartAuthenticated(true);
         }else{
          setIsCartAuthenticated(false);
         }
       }
      ,[isAuthenticated,url])
  
    const navigateTo = useNavigate();
  
    const goToLogin = () => {
      navigateTo("/login");
    };
  
    return (
      <>
        <nav className={"container py-8"} >
          <div className="logo">
            <img className="rounded-full w-24 h-24 border-2 border-black" src="/logo.png" alt="logo"  />
          </div>
          <div className={show ? "navLinks showmenu" : "navLinks"}>
            <div className="links">
              <Link to={"/"} onClick={() => setShow(!show)}>
                Home
              </Link>
              <Link to={"/appointment"} onClick={() => setShow(!show)}>
                Appointment
              </Link>
              <Link to={"/product"} onClick={()=>setShow(!show)}>
                Products
              </Link>
              <Link to={"/about"} onClick={() => setShow(!show)}>
                About Us
              </Link>
            </div>
            {isCartAuthenticated?(
             <div className="text-7xl">
             <Link to={"cart"}>
             <div className="absolute top-5 text-sm text-bold  text-red-600 text-center rounded-full m-0 p-0 ">
                 {cartItemNumber.length}
               </div>
               <BsCartFill className="" />
               
             </Link>
           </div>
            ):(<div></div>)
            }
            {isAuthenticated ? (
              <div>   
              <button className="logoutBtn btn" onClick={handleLogout}>
                LOGOUT
              </button>
              </div>
            ) : (
              <button className="loginBtn btn" onClick={goToLogin}>
                LOGIN
              </button>
            )}
          </div>
          <div className="hamburger" onClick={() => setShow(!show)}>
            <GiHamburgerMenu />
          </div>
        </nav>
      </>
    );
};

export default Navbar;