import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import LoginNavbar from '../components/LoginNavbar';
import { mobile } from '../Responsive';
import { subcategories,categories,allproducts } from '../data';
import {useState,useEffect} from "react"
import { useSelector } from 'react-redux';
import axios from "axios"
import { Link } from 'react-router-dom';
const Container = styled.div`
     
`
const Wrapper = styled.div`
    padding: 80px;
    ${mobile({padding:"10px"})}
`
const Title = styled.h1`
    font-weight: 600;
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
  margin-top: 10px;
  -webkit-box-shadow: 1px 5px 10px 2px rgba(0,0,0,0.31); 
box-shadow: 1px 5px 10px 2px rgba(0,0,0,0.31);
  ${mobile({flexDirection:"column"})}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
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

const ProductInfo = styled.span``;

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
const DeliveryInfo = styled.h3`
   margin-left: 800px;
   color: ${(props) => props.color};

`
const Review = styled.button`
  margin-left:20px;
  cursor:pointer;
  border:none;
  padding:5px 15px;
  color:black;
  background-color:orange;
  font-weight: 600;
  border-radius: 5px;
`
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
                {orders.length?
                 [...orders].reverse().map((order) =>
                      <Product>
                      <ProductDetail>
                          <Details>
                              <ProductName><b>Product:</b> {order.title}</ProductName>
                              <ProductId><b>ID:</b> {order._id}</ProductId>
                              <ProductSize><b>Price:</b>{order.price}</ProductSize>
                              <ProductInfo><b>Seller:</b>{order.seller.firstname}</ProductInfo>
                              <ProductInfo><b>Seller city:</b>{order.seller.city}</ProductInfo>
                              <ProductInfo><b>Seller Mob :</b>{order.seller.phone}</ProductInfo>
                          </Details>
                          {
                            order.isDelivered ?
                            <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                          <DeliveryInfo color="green">Delivered</DeliveryInfo>
                          <Link to={`/review/${order.seller._id}`}>
                          <Review>Review</Review>
                          </Link>
                          </div>
                           :
                          <DeliveryInfo color="red">Not Delivered</DeliveryInfo>
                          }
                      </ProductDetail>
                    </Product>):
                    <div style={{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px"}}>
                  <span style={{color:"gray",fontWeight:500,textAlign:"center",}}>You have no orders yet</span>
                  </div>}
                 
              </Info>
            
          </Bottom>
      </Wrapper>
      <Footer/>
  </Container>
  )
};

export default Orders;