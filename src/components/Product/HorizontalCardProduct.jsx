import React, { useContext, useEffect, useRef, useState } from 'react'
import fetchCategoryWiseProduct from '../../helper/FetchCategoryWiseProduct';
import displayINRCurrency from '../../helper/DisplayCurrency'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import addToCart from '../../helper/AddToCart'
import { Context } from '../../main';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem } from '../../features/productSlice';
import { toast } from 'react-toastify';


const HorizontalCardProduct = ({category, heading}) => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const loadingList = new Array(3).fill(null)
    const dispatch = useDispatch();
    const [scroll,setScroll] = useState(0)
    const scrollElement = useRef()
    
    const { fetchUserAddToCart } = useContext(Context)

    const handleAddToCart = async(e,product)=>{
        e.preventDefault();
       dispatch(addCartItem(product));
    }

    const fetchData = async() =>{
        setLoading(true)
        const categoryProduct = await fetchCategoryWiseProduct(category)
        setLoading(false)
        setData(categoryProduct?.data?.data);
        
    }



    useEffect(()=>{
        fetchData()
    },[])

    const scrollRight = () =>{
        scrollElement.current.scrollLeft += 300
    }
    const scrollLeft = () =>{
        scrollElement.current.scrollLeft -= 300
    }
    let mydata = data.map((product,index)=>data);
    console.log("My Data", mydata);
 


  return (
    <div className='container mx-auto px-4 my-6 relative'>

            <h2 className='text-2xl font-semibold py-4'>{heading}</h2>

                
           <div className='flex items-center gap-4 md:gap-6 scrollbar-none transition-all' ref={scrollElement}>

            <button  className='bg-white shadow-md rounded-full p-1 absolute left-0 text-lg hidden md:block' onClick={scrollLeft}><FaAngleLeft/></button>
            <button  className='bg-white shadow-md rounded-full p-1 absolute right-0 text-lg hidden md:block' onClick={scrollRight}><FaAngleRight/></button> 

           {   loading ? (
                loadingList.map((product,index)=>{
                    return(
                        <div className='w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white rounded-sm shadow flex'>
                            <div className='bg-slate-200 h-full p-4 min-w-[120px] md:min-w-[145px] animate-pulse'>

                            </div>
                            <div className='p-4 grid w-full gap-2'>
                                <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black bg-slate-200 animate-pulse p-1 rounded-full'></h2>
                                <p className='capitalize text-slate-500 p-1 bg-slate-200 animate-pulse rounded-full'></p>
                                <div className='flex gap-3 w-full'>
                                    <p className='text-red-600 font-medium p-1 bg-slate-200 w-full animate-pulse rounded-full'></p>
                                    <p className='text-slate-500 line-through p-1 bg-slate-200 w-full animate-pulse rounded-full'></p>
                                </div>
                                <button className='text-sm  text-white px-3 py-0.5 rounded-full w-full bg-slate-200 animate-pulse'></button>
                            </div>
                        </div>
                    )
                })
           ) : (
            data.map((product,index)=>{
                return(
                    <Link to={product?._id} className='w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white rounded-sm shadow flex'>
                        <div className='bg-slate-200 h-full p-4 min-w-[120px] md:min-w-[145px]'>
                            <img src={product.productImage.url} className='object-scale-down h-full hover:scale-110 transition-all'/>
                        </div>
                        <div className='p-4 grid'>
                            <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black'>{product?.name}</h2>
                            <p className='capitalize text-slate-500'>{product?.category}</p>
                            <div className='flex gap-3'>
                                
                                <p className='text-slate-500 font-medium'>{ displayINRCurrency(product?.price)  }</p>
                            </div>
                            <button className='text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-0.5 rounded-full' onClick={(e)=>handleAddToCart(e,product)}>Add to Cart</button>
                        </div>
                    </Link>
                )
            })
           )
               
            }
           </div>
            

    </div>
  )
}

export default HorizontalCardProduct