import React from "react";
import { CiForkAndKnife } from "react-icons/ci";
import { MdProductionQuantityLimits } from "react-icons/md";


const FilterProduct = ({category,onClick,isActive}) => {
  return (
    <div onClick={onClick}>
      <div className={`text-3xl p-5  rounded-full cursor-pointer ${isActive ? "bg-red-600 text-white" : "bg-yellow-500"}`}>
        < MdProductionQuantityLimits />
      </div>
      <p className="text-center font-medium my-4 capitalize">{category}</p>
    </div>
  );
};

export default FilterProduct;