import { useState,useEffect } from "react";
import AdminTop from "./components/topbar/AdminTop";
import axios from "axios"
import styled from "styled-components";
import RatingComponent from "../components/RatingComponent";


const TableWrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content: center;
`

const Table = styled.table`
  margin:20px;
  width:95%;
  
  
`

const Tr = styled.tr`
  font-weight: 600;
  
  
  &:hover{
   background-color: #dfefe9;
   }
 
`
const Td = styled.td`
   
   border-bottom: 1px solid gray;
   padding:20px;
   text-align: center;
   margin: 150px;
   font-weight: 500;
   
   
  
`
const Th = styled.th`
  padding:20px;
  margin: 150px;
  border-bottom: 1px solid gray;
  margin: 40px;
  

`
const ActionButton = styled.button`
  background-color: #f65a5a;
  border: none;
  color:white;
  border-radius: 3px;
  padding:5px;
  cursor:pointer;
`

export default function SellerList() {
  const [sellers, setSellers] = useState([]);

  useEffect(()=>{
    const getSellers = async ()=>{
      try {
        const res = await axios.get(
          "http://localhost:5000/api/admin/get-sellers"
        )
        setSellers(res.data)
      } 
      catch (error) {
        console.log(error)
      }
    }
    getSellers();
 },[])

  const handleDelete = (id) => {
    // setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="userList">

      <AdminTop/>
      <h1 style={{fontSize:"25px",margin:"10px"}}>Sellers</h1>
      <TableWrapper>
      <Table>
        <Tr>
        <Th>ID</Th>
        <Th>Name</Th>
        <Th>Email</Th>
        <Th>City</Th>
        <Th>Rating</Th>
        <Th>Action</Th>
        </Tr>

        {sellers.map((seller)=>(
        <Tr>
            <Td>{seller._id}</Td>
            <Td>{seller.firstname}</Td>
            <Td>{seller.email}</Td>
            <Td>{seller.city}</Td>
            <Td><div style={{display:"flex",alignItems:"center",justifyContent:"center"}}><RatingComponent value={seller.totalRating}/></div></Td>
            <Td><ActionButton>Remove</ActionButton></Td>
        </Tr>
        ))}
      </Table>
      </TableWrapper>
    </div>
  );
}