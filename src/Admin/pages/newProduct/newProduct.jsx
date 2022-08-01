import "./newProduct.css";
import { useState,useEffect } from "react";
import axios from "axios"
import { useSelector } from "react-redux";
import Topbar from "../../components/topbar/Topbar";
import { useNavigate } from "react-router-dom";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { storage } from "../../../firebase";
import {ref,uploadBytesResumable,getDownloadURL} from "firebase/storage"
import styled from "styled-components";

const Button = styled.button`
   margin-top: 10px;
    padding: 7px 10px;
    width:100%;
    border: none;
    border-radius: 10px;
    background-color: darkblue;
    color: white;
    font-weight: 600;
    cursor: pointer;

    &:disabled{
      cursor: not-allowed;
      background-color: #d5baed;
    }
`

export default function NewProduct() {

  const [file,setFile] = useState("")
  const seller = useSelector((state)=>state.user.currentUser)
  const seller_id = seller.data._id
  const [image,setImage] = useState("")
  const [per, setPerc] = useState(null);
  const [cat,setCat] = useState("")
  const [subcat,setSubcat] = useState([])

  useEffect(()=>{
   const uploadFile = ()=>{
      
      const name = new Date().getTime() + file.name
      console.log(name)
      const storageRef = ref(storage,file.name)

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImage(downloadURL);
          });
        }
      );
    };
   
   
   file && uploadFile()
  },[file])

  console.log(image)

  const handlecat = (e)=>{
    const value = e.target.value
    console.log(value)
       if(value==="vegetables"){
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
    axios.post('http://localhost:5000/api/product',{...finalData,seller_id,image})
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
    <div style={{display:"flex",flexDirection:"column"}}>
      <h1 className="addProductTitle">New Product</h1>
      <form onSubmit ={handleSubmit} className="addProductForm">
        <div className="addProductItem">
        <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
        </label>
          <input type="file" name ="image" id="file" style={{visibility:"hidden"}} onChange={(e)=>setFile(e.target.files[0])} />
        </div>
        <div className="addProductItem">
          <input type="text" name="title" placeholder="Title" />
        </div>
        <div className="addProductItem">
          <select onChange = {handlecat} name="category" id="category">
            <option value="">Select category</option>
            <option value="vegetables">vegetables</option>
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
          <select   name="Locality" id="locality">
            <option value="">Select Locality</option>
            <option value="Kalpetta">Kalpetta</option>
            <option value="Mananthavady">Mananthavady</option>
            <option value="Sulthan bathery">Sulthan bathery</option>
          </select>
          </div>
        <Button disabled = {per !== null && per < 100 } className="addProductButton">Create</Button>
      </form>
      
    </div>
    <div className="imageBox">
      <img src={
        file
        ? URL.createObjectURL(file)
        : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
    }
      className="image"></img>
      {/* {per!==null && per < 100?<h3 style={{fontSize:"15px",fontWeight:600,margin:"20px",width:"100%"}}>Image is uploading....</h3> :<h3 style={{fontSize:"15px",fontWeight:600,margin:"20px"}}>image uploaded</h3>} */}
    </div>
     </div>
    
    </div>

    </div>
  );
}