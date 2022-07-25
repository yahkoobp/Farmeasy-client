import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import {adminLoginStart,adminLoginSuccess,adminLoginFailure,adminLogout} from "./adminRedux"


export const login = async (dispatch,user)=>{
    dispatch(loginStart());
    try {
        const res = await axios.post("http://localhost:5000/api/auth/login",user)
        dispatch(loginSuccess(res))
    } catch (error) {
        dispatch(loginFailure())
    }
}

export const adminLogin = async (dispatch,admin)=>{
    dispatch(adminLoginStart());
    try {
        const res = await axios.post("http://localhost:5000/api/admin/login",admin)
        dispatch(adminLoginSuccess(res))
    } catch (error) {
        dispatch(adminLoginFailure())
    }
}
