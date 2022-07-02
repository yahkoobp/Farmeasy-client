import LoginNavbar from "./components/LoginNavbar";
import Navbar from "./components/Navbar";
import NavMenu from "./components/NavMenu";
import LoginHome from "./pages/LoginHome";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {
  Routes,
  Route,
} from "react-router-dom";
import Seller from "./pages/SellerRequest";
import Products from "./components/Products";
import Product from "./components/Product";
import Bag from "./pages/Bag";
import AllProducts from "./pages/AllProducts";
import CustomProducts from "./pages/CustomProducts";
import SingleProduct from "./pages/SingleProduct";
import Orders from "./pages/Orders";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<LoginHome/>}/>
        <Route path="/seller-request" element={<Seller/>}/>
        <Route path="/bag" element={<Bag/>}/>
        <Route exact path="/all-products" element={<AllProducts/>}/>
        <Route path="/specific-products" element={<CustomProducts/>}/>
        <Route path="/single-product" element={<SingleProduct/>}/>
        <Route path="/orders" element={<Orders/>}/>
      </Routes>
        
      
    </div>
  );
}

export default App;
