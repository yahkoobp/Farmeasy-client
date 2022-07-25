import {createSlice} from "@reduxjs/toolkit"

const adminSlice = createSlice({
    name :"admin",
    initialState:{
         currentAdmin : null,
         isFetching : false,
         logged:false,
         loading:false,
         isError:false
    },
    reducers :{
        adminLoginStart:(state)=>{
        state.isFetching=true
        state.loading=true
        state.logged = false
       },

       adminLoginSuccess:(state,action)=>{
        state.isFetching=true;
        state.isError=false;
        state.loading=false
        state.logged=true
        state.currentAdmin=action.payload;

       },
       adminLoginFailure:(state)=>{
        state.isFetching=false;
        state.logged = false
        state.loading=false
        state.isError=true
        
       },
       adminLogout:(state)=>{
         
         state.currentAdmin=null;
         state.isFetching=false;
         state.logged=false;
         state.isError=false;
       }
    }
})

export const {adminLoginStart,adminLoginSuccess,adminLoginFailure,adminLogout} = adminSlice.actions
export default adminSlice.reducer