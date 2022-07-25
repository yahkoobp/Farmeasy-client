import { useState,useEffect } from "react";
import AdminTop from "./components/topbar/AdminTop";
import axios from "axios"
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Done, DoneOutline } from "@material-ui/icons";


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
  background-color:green;
  
  border: none;
  color:white;
  border-radius: 3px;
  padding:5px 15px;
  cursor:pointer;
  &:hover{
    background-color:#2ba613
  }
`

export default function SellerRequests() {
  const [requests, setRequests] = useState([]);
  useEffect(()=>{
    const getRequests = async ()=>{
      try {
        const res = await axios.get(
          "http://localhost:5000/api/seller-request/get-requests"
        )
        setRequests(res.data)
      } 
      catch (error) {
        console.log(error)
      }
    }
    getRequests();
 })

  const handleClick = (request)=>{
    axios.post("http://localhost:5000/api/seller/seller-register",request)
    axios.put(`http://localhost:5000/api/seller-request/${request.userId}`)
    axios.put(`http://localhost:5000/api/seller-request/seller/${request.userId}`)
    window.alert("The Seller is Approved")
  }

  return (
    <div className="userList">

      <AdminTop/>
      <h1 style={{fontSize:"25px",margin:"10px"}}>Seller Requests</h1>
      <TableWrapper>
      <Table>
        <Tr>
        <Th>ID</Th>
        <Th>Name</Th>
        <Th>Email</Th>
        <Th>City</Th>
        <Th>Address</Th>
        <Th>Action</Th>
        </Tr>

        {[...requests].reverse().map((request,index)=>(
        <Tr key={index}>
            <Td>{request._id}</Td>
            <Td>{request.firstname}</Td>
            <Td>{request.email}</Td>
            <Td>{request.city}</Td>
            <Td>{request.address}</Td>
            { request.isSeller?<Td><h3 style={{color:"teal"}}>Approved <Done style={{color:"green",}}/> </h3></Td>:
            <Td><ActionButton onClick = {() =>{
              const confirmBox = window.confirm("If Approved the user will be able to sell thier products")
              if(confirmBox === true)
              handleClick(request)}}>Approve</ActionButton></Td>
            }
        </Tr>
        ))}
      </Table>
      </TableWrapper>
    </div>
  );
}