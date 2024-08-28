import axios from 'axios';

const FetchCategoryWiseProduct = async(category)=>{
    const response = await axios.post("http://localhost:4000/api/v1/product/category-product",{
        "category":category
    }
    );
    console.log(response);

    return response;
}

export default FetchCategoryWiseProduct;