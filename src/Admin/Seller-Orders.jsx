import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import LoginNavbar from '../components/LoginNavbar';
import { mobile } from '../Responsive';
import {useState,useEffect} from "react"
import { useSelector } from 'react-redux';
import axios from "axios"
const Container = styled.div`
     
`
const Wrapper = styled.div`
    padding: 80px;
    ${mobile({padding:"10px"})}
`
const Title = styled.h1`
    font-weight: 500;
    font-size: 25px;
    
`

const Bottom = styled.div`
    margin-top: 20px;
    display:flex;
    justify-content: space-between;
    ${mobile({flexDirection:"column"})}
`
const Info = styled.div`
    flex:3;
    
`
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom:1px solid lightgray;
  ${mobile({flexDirection:"column"})}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  margin:5px 0px;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({margin:"5px 15px"})}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({marginBottom:"20px"})}
`;
const Hr= styled.hr`
    background-color:#eee ;
    border: none;
    height:1px;
`

const Orders = () => {

  const [orders,setOrders] = useState([])
  const user = useSelector((state)=>state.user)
  const user_id = user.currentUser.data._id 


  useEffect(()=>{

    const getOrders = async ()=>{
      try {
        const res = await axios.get(`http://localhost:5000/api/orders/find/${user_id}`)
        // console.log(res)
        setOrders(res.data.orders)
        
      } catch (error) {
        console.log(error)
      }
    }
    getOrders();
   },[user_id])

   console.log(orders)
  
  return(
  <Container>
      <LoginNavbar/>
      <Wrapper>
          <Title>YOUR ORDERS</Title>
          <Bottom>
              <Info>
                  {orders.map(nested=> nested.map(order =>
                      <Product>
                      <ProductDetail>
                          <Details>
                              <ProductName><b>Product:</b> {order.subcat}</ProductName>
                              <ProductId><b>ID:</b> {order._id}</ProductId>
                              <ProductSize><b>Quantity:</b>{order.price}</ProductSize>
                          </Details>
                      </ProductDetail>
                  </Product>))}
              </Info>
            
          </Bottom>
      </Wrapper>
      <Footer/>
  </Container>
  )
};

export default Orders;