import axios from 'axios';
import { toast } from 'react-toastify'

const AddToCart = async(e,id) =>{
    e?.stopPropagation()
    e?.preventDefault()

    const responseData = await axios.get("http://localhost:4000/api/v1/cart/addtocart");


    if(responseData.success){
        toast.success(responseData.message)
    }

    if(responseData.error){
        toast.error(responseData.message)
    }


    return responseData;

}


export default AddToCart;