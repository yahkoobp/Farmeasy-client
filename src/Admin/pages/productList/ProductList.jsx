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

  useEffect(()=>{
    const getProducts = async ()=>{
      try {
        const res = await axios.get(
          `http://localhost:5000/api/product/seller/?id=${seller_id}`
        )
        // console.log(res.data)
        setProducts(res.data)
       
      } 
      catch (error) {
        console.log(error)
      }
    }
    getProducts();
 })
  // const [data, setData] = useState(productRows);

  const handleDelete = (_id) => {
   
    // setProducts(products.filter((item) => item._id !== _id));
    axios.delete(`http://localhost:5000/api/product/${_id}`)


  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
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
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
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
    </div>
  );
}