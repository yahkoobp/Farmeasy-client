import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import { addProduct } from "./basketRedux";

export const login = async (dispatch,user)=>{
    dispatch(loginStart());
    try {
        const res = await axios.post("http://localhost:5000/api/auth/login",user)
        dispatch(loginSuccess(res))
    } catch (error) {
        dispatch(loginFailure())
    }
}

// export const basketQuantity = async (dispatch,basketCount)=>{
//     try {
//         const res=await axios.put("http://localhost:5000/api/basket/count",basketCount)
//         dispatch(addProduct(res.data))
//         console.log(res)
//     } catch (error) {
//         console.log(error)
//     }
// }