import "./newProduct.css";
import { useState } from "react";
import axios from "axios"
import { useSelector } from "react-redux";
import Topbar from "../../components/topbar/Topbar";
import { useNavigate } from "react-router-dom";

export default function NewProduct() {

  const seller = useSelector((state)=>state.user.currentUser)
  const seller_id = seller.data._id
  
  const [cat,setCat] = useState("")
  const [subcat,setSubcat] = useState([])

  const handlecat = (e)=>{
    const value = e.target.value
    console.log(value)
       if(value==="vegitables"){
        setSubcat(["tomato","potato","onion","ginger","others"])
       }
       else if(value === "fruits"){
        setSubcat(["banana","lemon","pineapple","jackfruit","mango","others"])
       }
       else{
        setSubcat([])
       }
       
       console.log(subcat)
  }
  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault()
    // console.log(e)
    const data=new FormData(e.target)
    // console.log(Object.fromEntries(data.entries()))
    const finalData=Object.fromEntries(data.entries())
    console.log(finalData)
    axios.post('http://localhost:5000/api/product',{...finalData,seller_id})
    .then((res) => {
        console.log(res.data)
    }).catch((error) => {
        console.log(error.response.data)
    });

    // axios.post(`http://localhost:5000/api/seller/add-products/${seller_id}`,{finalData})
    navigate("/seller")

  }
  return (
    <div style={{width:"100%"}}>
        <Topbar/>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form onSubmit ={handleSubmit} className="addProductForm">
        <div className="addProductItem">
          <input type="file" name ="image" id="file" />
        </div>
        <div className="addProductItem">
          <input type="text" name="title" placeholder="Title" />
        </div>
        <div className="addProductItem">
          <select onChange = {handlecat} name="category" id="category">
            <option value="">Select category</option>
            <option value="vegitables">vegitables</option>
            <option value="fruits">fruits</option>
            <option value="plants&seeds">plants&seeds</option>
          </select>
          </div>
          <div className="addProductItem">
          <select    name="subcat" id="subcat">
            <option value="">Select subcategory</option>
            {subcat.map((subcat)=><option>{subcat}</option>)}
          </select>
          </div>
        <div className="addProductItem">
          <input type="text" placeholder="Description" />
        </div>
        <div className="addProductItem">
          <input type="text" name ="price" placeholder="Price" />
        </div>
        <div className="addProductItem">
          
          <select name="available" id="active">
            <option value ="">available</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="addProductItem">
          <select   name="category" id="category">
            <option value="">Select Locality</option>
            <option value="vegitables">Kalpetta</option>
            <option value="fruits">mananthavady</option>
            <option value="plants&seeds">sulthan bathery</option>
          </select>
          </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
    </div>
    </div>
  );
}