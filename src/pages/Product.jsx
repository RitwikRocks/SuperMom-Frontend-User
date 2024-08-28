import React from 'react';
import CategoryList from '../components/Product/CategoryList';
import BannerProduct from '../components/Product/BannerProduct';
import HorizontalCardProduct from '../components/Product/HorizontalCardProduct';
import VerticalCardProduct from '../components/Product/VerticalCardProduct';
import { Outlet } from 'react-router-dom';

const Product = () => {
  return (
    <div>
    <CategoryList/>
    <BannerProduct/>
    <Outlet/>
    <HorizontalCardProduct category={"Health Care"} heading={"Health Care"}/>
    <HorizontalCardProduct category={"Cloths"} heading={"Popular's Cloths"}/>
    <VerticalCardProduct category={"Accessories"} heading={"Accessories"}/>
    </div>
  )
}

export default Product