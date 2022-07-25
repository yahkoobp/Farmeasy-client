import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../../dummyData";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios"
import { useSelector } from "react-redux";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function ProductList() {
const [products,setProducts] = useState([])
const seller = useSelector((state)=>state.user.currentUser)
 const seller_id = seller.data._id
 console.log(seller.data)

  useEffect(()=>{
    const getProducts = async ()=>{
      try {
        const res = await axios.get(
          `http://localhost:5000/api/product/seller/?id=${seller_id}`
        )
        // console.log(res.data)
        setProducts(res.data)
        console.log(products)
       
      } 
      catch (error) {
        console.log(error)
      }
    }
    getProducts();
 },[seller_id])
  // const [data, setData] = useState(productRows);

  const handleDelete = (_id) => {
   
    // setProducts(products.filter((item) => item._id !== _id));
    axios.delete(`http://localhost:5000/api/product/${_id}`)


  };

  const columns = [
    { field: "_id", headerName: "ID", width: 300 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {/* <img className="productListImg" src={params.row.image} alt="" /> */}
            {params.row.title}
          </div>
        );
      },
    },
    { field: "available", headerName: "available", width: 200 },
    // {
    //   field: "status",
    //   headerName: "Status",
    //   width: 120,
    // },
    {
      field: "price",
      headerName: "Price",
      width: 300,
    },
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];



  return (
    <div>
      
      {seller.data.isSeller ?
    <div className="productList">
      <Topbar/>
    
      <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        getRowId={row=>row._id}
        pageSize={50}
        checkboxSelection
      />
    </div> :
    
      <div style={{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
        
      <h1 style={{color:"red"}}>You are not allowed to sell at this moment...</h1>
      <Link to ="/seller-request">
      <button style={{border:"none",backgroundColor:"green",color:"white",borderRadius:"4px",padding:"10px",margin:"30px",cursor:"pointer"}}>Become a seller</button>
      </Link>
      </div>
}
    </div>
  );
}