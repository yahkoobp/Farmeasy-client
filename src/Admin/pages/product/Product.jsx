import { Link, Navigate, useNavigate } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../../dummyData"
import { Publish } from "@material-ui/icons";
import { useLocation } from "react-router-dom";
import { useEffect,useState} from "react";
import axios from "axios";
import Topbar from "../../components/topbar/Topbar";


export default function Product() {
    const [product,setProduct] = useState({})
    const location = useLocation()
    const p_id = location.pathname.split("/")[2]
    const navigate = useNavigate()
    
    useEffect(()=>{
        const getProducts = async ()=>{
            try {
              const res = await axios.get(
                "http://localhost:5000/api/product/find/"+p_id)
              /* console.log(res) */
              setProduct(res.data)
            } catch (error) {
              console.log(error)
            }
          }
          getProducts();
    },[p_id])

    const handleSubmit = (e)=>{
       e.preventDefault()
    const data=new FormData(e.target)
    const finalData=Object.fromEntries(data.entries())
    console.log(finalData)
    axios.put(`http://localhost:5000/api/product/${p_id}`,finalData)
    .then((res) => {
        console.log(res.data)
    }).catch((error) => {
        console.log(error.response.data)
    });
      navigate("/seller")
    }
  return (
    <div style={{width:"100%"}}>
      <Topbar/>
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src={product.image ? product.image :"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" className="productInfoImg" />
                  <span className="productName">{product.title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue"> {product._id}</span>
                      
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">available:</span>
                      <span className="productInfoValue">{product.available}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">price:</span>
                      <span className="productInfoValue">{product.price}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form onSubmit={handleSubmit} className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input name="title" type="text" placeholder={product.title} />
                  <label>Product Price</label>
                  <input name="price" type="text" placeholder={product.price} />
                  <label>available</label>
                  <select name="available" id="available">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>

              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      {/* <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productUploadImg" /> */}
                      {/* <label for="file">
                          <Publish/>
                      </label> */}
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button type ="submit" className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
    </div>
  );
}