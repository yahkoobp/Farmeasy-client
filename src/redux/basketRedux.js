import {createSlice} from "@reduxjs/toolkit"
import {user} from "./userRedux"



const basketSlice = createSlice({
    name :"basket",
    initialState:{
         userId:'',
         products:[],
         quantity:0,
         total:0
    },
    reducers :{
        addProduct :(state,action)=>{
            // console.log(action.payload.user.currentUser.data._id)
            // console.log(state.userId)
            state.quantity = action.payload.basketQuantity + 1
            // state.products.push(action.payload)
            // console.log(action.payload)
            // state.total += action.payload.price *action.payload.quantity
            // console.log(state.total)
            
        },

        deleteProduct :(state,action) =>{
            state.quantity -=1 
            // const Index = state.products.findIndex((a) =>a._id === action.payload.product._id)
            // console.log(Index)
           
            // console.log(action.payload.product._id)
            // state.products.splice(Index,1)

            // state.total -= action.payload.price *action.payload.quantity

        },

        logOut :(state,action) =>{
            state.quantity=action.payload.basketQuantity;
            console.log(state.quantity)
            
        }
    }
})

export const {addProduct,deleteProduct,logOut} = basketSlice.actions
export default basketSlice.reducer