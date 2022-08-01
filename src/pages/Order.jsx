import React from 'react'
import styled from 'styled-components'
import { useState,useEffect } from 'react'
import { useSelector } from "react-redux"
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
import LoginNavbar from '../components/LoginNavbar'



const Container = styled.div`
     height:100vh;
     width:100%;
    
`
const Wrapper = styled.div`
    height: 100vh;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color:#e3e3cb
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding:30px;
    border-radius: 5px;
    background-color: white;
    -webkit-box-shadow: 1px 5px 10px 2px rgba(0,0,0,0.31); 
    box-shadow: 1px 5px 10px 2px rgba(0,0,0,0.31);
`
const Head = styled.h2`
    color :green;
`
const Input = styled.input`
    padding:10px;
    margin:15px;
    width:250px;
    border:none ;
    border-bottom: 0.5px solid gray;
    outline: none;
    border-radius: 0px;
    background-color:transparent;
    
`
const TextArea = styled.textarea`
    min-width: 40%;
    resize:none;
    padding:10px;
    margin:15px;
    width:250px;
    border:none;
    border-bottom: 0.5px solid gray;
    outline: none;
    border-radius:0px;
    
    

`
const Price = styled.h4`
    font-weight:600;
    font-size: 18px;

`
const Button = styled.button`
   padding:10px;
   margin-top:20px;
   background-color: green;
   border: none;
   border-radius: 5px;
   color: white;
   font-size: 15px;
   cursor: pointer;
   width:220px;

`



const Order = () => {

    const user = useSelector((state)=>state.user)
    const user_id = user.currentUser.data._id 
    const [bag,setBag] = useState([])
    const navigate = useNavigate()
    const isDelivered = false ;


    useEffect(()=>{

        const getProducts = async ()=>{
          try {
            const res = await axios.get(`http://localhost:5000/api/basket/find/${user_id}`)
            console.log(res)
            setBag(res.data.cartProducts)
          } catch (error) {
            console.log(error)
          }
        }
        getProducts();
       })
      
       let total=0
       bag.map((product)=>{
        total = total+ product.price * product.quantity
       })
 const status ={status:"pending"}

       const handleSubmit = (e) =>{
        e.preventDefault()
    const data=new FormData(e.target)
    const finalData=Object.fromEntries(data.entries())
    console.log(finalData)
    bag.map((product)=>(
        axios.post (`http://localhost:5000/api/orders/${user_id}`,{product})
        .then((res) => {
    
        }).catch((error) => {
            console.log(error.response.data)
        })
    ))
       
     bag.map((product)=>(
        axios.post (`http://localhost:5000/api/seller/orders/${product.seller._id}`,{user_id,isDelivered,...finalData,product})
        .then((res) => {
    
        }).catch((error) => {
            console.log(error.response.data)
        })
     ))
    
    
    axios.put(`http://localhost:5000/api/orders/delete/${user_id}`)

    navigate("/order-success")
    
       }
  return (
    <Container>
        <LoginNavbar/>
        <Wrapper>
            <Form onSubmit={handleSubmit}>
            <Head>Order Confirmation</Head>
            <Input type ="text" name ="firstname" placeholder="Name" required/>
            <Input type = "number" name="phone" min="1" placeholder = "Mobile Number" required/>
            <TextArea name="address" placeholder='Address' required/>
            <Price>Total Amount :Rs {total}.00</Price>
            <Button type="submit">Confirm</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Order