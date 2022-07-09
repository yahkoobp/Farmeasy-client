import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name :"user",
    initialState:{
         currentUser : null,
         isFetching : false,
         logged:false,
         isError:false
    },
    reducers :{
        loginStart:(state)=>{
        state.isFetching=true
        state.logged = false
       },

       loginSuccess:(state,action)=>{
        state.isFetching=true;
        state.isError=false;
        state.logged=true
        state.currentUser=action.payload;

       },
       loginFailure:(state)=>{
        state.isFetching=false;
        state.logged = false
        state.isError=true
        
       },
       logout:(state)=>{
         
         state.currentUser=null;
         state.isFetching=false;
         state.logged=false;
         state.isError=false;
       }
    }
})

export const {loginStart,loginSuccess,loginFailure,logout} = userSlice.actions
export default userSlice.reducer