import React from 'react'
import styled from 'styled-components'
import { useState,useEffect } from 'react'
import { useSelector } from "react-redux"
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'



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
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid teal;
    padding:30px;
    border-radius: 4px;
    -webkit-box-shadow: 2px 3px 11px 6px rgba(0,0,0,0.12); 
    box-shadow: 2px 3px 11px 6px rgba(0,0,0,0.10);
`
const Head = styled.h2`
    color :green;
`
const Input = styled.input`
    padding:10px;
    margin:15px;
    width:250px;
    border:1px solid teal;
    outline: none;
    border-radius: 5px;
    background-color:transparent;
    
`
const TextArea = styled.textarea`
    min-width: 40%;
    resize:none;
    padding:10px;
    margin:15px;
    width:250px;
    border:1px solid teal;
    outline: none;
    border-radius:4px;
    
    

`
const Price = styled.h4`
    font-weight:250;
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

       const handleSubmit = () =>{
        axios.post (`http://localhost:5000/api/orders/${user_id}`,{bag})
    .then((res) => {

    }).catch((error) => {
        console.log(error.response.data)
    });
     bag.map((product)=>(
        axios.post (`http://localhost:5000/api/seller/orders/${product.seller._id}`,{product})
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
        <Wrapper>
            <Form onSubmit={handleSubmit}>
            <Head>Order Confirmation</Head>
            <Input type ="text" name ="name" placeholder="Name" required/>
            <Input type = "number" name="mobNo" min="1" placeholder = "Mobile Number" required/>
            <TextArea name="address" placeholder='Address' required/>
            <Price>Amount to be paid : {total}</Price>
            <Button type="submit">Confirm</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Order