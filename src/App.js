import LoginNavbar from "./components/LoginNavbar";
import Navbar from "./components/Navbar";
import NavMenu from "./components/NavMenu";
import LoginHome from "./pages/LoginHome";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import {
  Routes,
  Route,
  Navigate

} from "react-router-dom";
import Seller from "./pages/SellerRequest";
import Products from "./components/Products";
import Product from "./components/Product";
import Bag from "./pages/Bag";
import AllProducts from "./pages/AllProducts";
import CustomProducts from "./pages/CustomProducts";
import SingleProduct from "./pages/SingleProduct";
import Orders from "./pages/Orders";
import SellerRequest from "./pages/SellerRequest";
import axios from "axios"
import {useState,useEffect} from "react"
import Topbar from "./Admin/components/Topbar";

function App() {
  const user = useSelector((state)=>state.user.currentUser)
  // const user_id = user._id
  // const basket =useSelector((state)=>state.basket)
  // const basketCount = basket.quantity
  // const [basketQuantity,setBasketQuantity] = useState(0)
  

  // useEffect(()=>{
  //   const UpdateBasketCount = async ()=>{
  //     try {
  //           const res = await axios.put(`http://localhost:5000/api/basket/count/${user_id}`,{basketCount})
           
  //           console.log(res.data)
  //           setBasketQuantity(res.data)
            
  
  //      } catch (error) { 
  //       console.log(error)
  //     }
  //   }
  //     UpdateBasketCount();
  //  },[basketCount])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={user ?<LoginHome/> :<Home/>}/>
        <Route path="/login" element={user?<Navigate to="/home"/> :<Login/>}/>
        <Route path="/register" element={user?<Navigate to="/home"/> :<Register/>}/>
        <Route path="/home" element={user? <LoginHome/> :<Home/>}/>
        <Route path="/seller-request" element={user ?<SellerRequest/> :<Navigate to="/"/>}/>
        <Route path="/bag" element={user ?<Bag/> :<Navigate to="/"/>}/>
        <Route exact path="/:category" element={user ?<AllProducts/>: <Navigate to="/"/> }/>
        <Route path="/:category/:subcat" element={user ?<CustomProducts/>:<Navigate to="/"/>}/>
        <Route path="/single-product/:id" element={user ?<SingleProduct/>:<Navigate to="/"/>}/>
        <Route path="/orders" element={user ?<Orders/>:<Navigate to="/"/>}/>
      </Routes>
        {/* <Topbar/> */}
      
    </div>
  );
}

export default App;
