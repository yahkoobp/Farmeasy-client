import { Add, CheckCircle, Remove } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import LoginNavbar from '../components/LoginNavbar';
import { mobile } from '../Responsive';
import {useState,useEffect} from "react"
import { useSelector } from 'react-redux';
import axios from "axios"
import Topbar from './components/topbar/Topbar';
const Container = styled.div`
     
`
const Wrapper = styled.div`
    padding: 10px;
    ${mobile({padding:"10px"})}
`
const Title = styled.h1`
    margin:10px;
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
  margin-top: 13px;
  justify-content: space-between;
  border-bottom:1px solid lightgray;
  -webkit-box-shadow: 1px 5px 10px 2px rgba(0,0,0,0.31); 
    box-shadow: 1px 5px 10px 2px rgba(0,0,0,0.31);
  ${mobile({flexDirection:"column"})}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content:space-between;
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

const ProductName = styled.span`
`;

const ProductId = styled.span`
  margin-top:10px;`;

const CustomerInfo = styled.span`
  margin-top:10px;
`


const ProductSize = styled.span`
 margin-top: 10px;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const DeliveryInfo = styled.button`
  border:none;
  color:white;
  padding:5px;
  background-color:teal;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  margin-left: 200px;
  margin-right: 50px;
  border-radius: 5px;
  border:2px solid black;
  -webkit-box-shadow: 1px 5px 10px 2px rgba(0,0,0,0.31); 
    box-shadow: 1px 5px 10px 2px rgba(0,0,0,0.31);

  &:hover{
    background-color:#08545b ;
  }
  
  
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

const SellerOrders = () => {

  const [orders,setOrders] = useState([])
  const seller = useSelector((state)=>state.user)
  const user_id = seller.currentUser.data._id
  console.log(user_id) 


  useEffect(()=>{

    const getOrders = async ()=>{
      try {
        const res = await axios.get(`http://localhost:5000/api/seller/orders/find/${user_id}`)
        // console.log(res)
        setOrders(res.data.orders)
        
      } catch (error) {
        console.log(error)
      }
    }
    getOrders();
   },[user_id])



  const handleClick =  (p_id,u_id)=>{
     axios.put(`http://localhost:5000/api/seller/delivery/${p_id}/?user=${u_id}`)
     const res = axios.put(`http://localhost:5000/api/seller/deliveryInfo/${user_id}/?user=${u_id}`)
     console.log(res)
     
  }
  
  return(
  <Container>
      <Topbar/>
      <Wrapper>
          <Title>YOUR ORDERS</Title>
          <Bottom>
              <Info>
                  {[...orders].reverse().map(order =>
                      <Product>
                      <ProductDetail>
                          <Details>
                              <ProductName><b>Product:    </b> {order.product.subcat}</ProductName>
                              <ProductId><b>ID:   </b> {order.product._id}</ProductId>
                              <ProductSize><b>Price:   </b>{order.product.price}</ProductSize>
                              <CustomerInfo><b>Customer name: </b>{order.firstname}  </CustomerInfo>
                              <CustomerInfo><b>Customer mob:</b>{order.phone}  </CustomerInfo>
                              <CustomerInfo Address><b>Customer Address:</b>{order.address} </CustomerInfo>

                              
                          </Details>
                          { order.isDelivered ? <h3 style={{color:"green",marginRight:"30px"}}> <div style={{display:"flex",alignItems:"center",margin:"5px"}}><CheckCircle style={{margin:"5px"}}/> Delivered</div></h3> :
                          <DeliveryInfo 
                          onClick={()=>{ 
                            const confirm = window.confirm("The product will be marked as delivered")
                            if(confirm===true)
                            handleClick(order.product._id,order.user_id)}}>mark as delivered</DeliveryInfo>}
                      </ProductDetail>
                  </Product>)}
              </Info>
            
          </Bottom>
      </Wrapper>
      <Footer/>
  </Container>
  )
};

export default SellerOrders;