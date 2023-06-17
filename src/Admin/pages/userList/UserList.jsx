import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../../dummyData";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import AdminTop from "../../components/topbar/AdminTop";
import axios from "axios"
import styled from "styled-components";
import { Button } from "@material-ui/core";

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

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    const getUsers = async ()=>{
      try {
        const res = await axios.get(
          "http://localhost:5000/api/admin/get-users"
        )
        setUsers(res.data)
      } 
      catch (error) {
        console.log(error)
      }
    }
    getUsers();
 },[])

  const handleDelete = (id) => {
     axios.delete(`http://localhost:5000/api/admin/delete/${id}`)
  };

  return (
    <div className="userList">

      <AdminTop/>
      <h1 style={{fontSize:"25px",margin:"10px"}}>Users</h1>
      <TableWrapper>
      <Table>
        <Tr>
        <Th>ID</Th>
        <Th>Name</Th>
        <Th>Email</Th>
        <Th>City</Th>
        <Th>Action</Th>
        </Tr>

        {[...users].reverse().map((user)=>(
        <Tr>
            <Td>{user._id}</Td>
            <Td>{user.firstname}</Td>
            <Td>{user.email}</Td>
            <Td>{user.city}</Td>
            <Td><ActionButton onClick = {handleDelete(user._id)}>Remove</ActionButton></Td>
        </Tr>
        ))}
      </Table>
      </TableWrapper>
    </div>
  );
}