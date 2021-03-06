import { Add, Remove ,DeleteOutlineOutlined} from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import LoginNavbar from '../components/LoginNavbar';
import { mobile } from '../Responsive';
import { subcategories,categories,allproducts } from '../data';
import { useSelector,useDispatch } from 'react-redux';
import {useState} from "react"
import { deleteProduct } from '../redux/basketRedux';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { addProduct } from '../redux/basketRedux';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
const Container = styled.div`
     
`
const Wrapper = styled.div`
    padding: 80px 10px;
    ${mobile({padding:"10px"})}
`
const Title = styled.h1`
    font-weight: 400;
    border-bottom:1px solid gray;
   
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border :${props =>props.type==='filled' && 'none'};
    background-color :${props =>props.type==='filled' ? 'black' : "transparent"};
    color :${props =>props.type==='filled' && 'white'};
`
const TopTexts =styled.div`
  ${mobile({display:"none"})}
`
const TopText =styled.span`
   text-decoration: underline;
   cursor: pointer;
   margin:0px 10px;
`

const Bottom = styled.div`
    display:flex;
    justify-content: space-between;
    ${mobile({flexDirection:"column"})}
`
const Info = styled.div`
   flex:3;
  
    
`
const Product = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom:1px solid lightgray;
  margin-top:15px;
  -webkit-box-shadow: 1px 5px 10px 2px rgba(0,0,0,0.31); 
    box-shadow: 1px 5px 10px 2px rgba(0,0,0,0.31);
  ${mobile({flexDirection:"column"})}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  margin:5px 0px;
  transition: all 1s ease;
`;

// const Image = styled.img`
//   width: 200px;
// `;

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
  font-weight: 500;
  ${mobile({marginBottom:"20px"})}
`;

const DeleteButton = styled.button`
  height:40px;
  background-color:white;
  font-size: 15px;
  color:darkblue;
  font-weight: 700;
  border:none;
  border-radius: 4px;
  margin : 0px 25px;
  cursor: pointer;
  &:hover{
    color:red;
  }
`
const Hr= styled.hr`
    background-color:#eee ;
    border: none;
    height:1px;
`
const Summary = styled.div`
  flex:1;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 20px;
  height: 25vh;
  margin:15px 20px;
  position: -webkit-sticky;
  position:sticky;
  top:0;
  -webkit-box-shadow: 1px 5px 10px 2px rgba(0,0,0,0.31); 
    box-shadow: 1px 5px 10px 2px rgba(0,0,0,0.31);
`
const SummaryTitle = styled.h1`
  font-weight: 500;
`;

const SummaryItem = styled.div`
  margin: 15px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span`
`;

const SummaryItemPrice = styled.span`
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor:pointer;
 
`;
const Bag = () => {
  const user = useSelector((state)=>state.user)
  const user_id = user.currentUser.data._id 
  const [quantity,setQuantity] = useState(1)
  const [bag,setBag] = useState([])
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleQuantity =(type)=>{
    if(type==="dec"){
     quantity > 1 && setQuantity(quantity-1)
    }
    else{
     setQuantity(quantity + 1)
    }
 }
 
 useEffect(()=>{
  const getProducts = async ()=>{
   
    
    try {
      const res = await axios.get(`http://localhost:5000/api/basket/find/${user_id}`)
      console.log(res)
      setBag(res.data.cartProducts)
      const basketQuantity = bag.length
      dispatch(addProduct({basketQuantity}))
    } catch (error) {
      console.log(error)
    }
  }
  getProducts();
 })
 

 let total=0
 bag.map((product)=>{
  total = total+ product.price * product.quantity
  // setTotal(total+(product.price*product.quantity))
  // console.log(total)

 })
 const handleRemove = ({product})=>{
   

        const res= axios.put(`http://localhost:5000/api/basket/delete/${user_id}/?pid=${product._id}`)
        console.log(res)
  
  dispatch(deleteProduct({product}))
  // console.log(product)
 }

 const handleClick = ()=>{
  bag.length ? navigate("/confirm-order") : window.alert("Oops...The basket is empty ! ")
 }
  return(
  <Container>
      <LoginNavbar basketCount ={bag.length}/>
      <Wrapper>
          <Title>YOUR BASKET</Title>
          <Bottom>
              <Info>
                  {bag.length ?bag.map(product=>(
                      <Product>
                      <ProductDetail>
                          {/* <Image src={product.image} /> */}
                          <Details>
                              <ProductName><b>Product:</b> {product.title}</ProductName>
                              <ProductId><b>Price:</b> {product.price}</ProductId>
                              <ProductSize><b>Quantity:</b>{product.quantity}kg</ProductSize>
                          </Details>
                      </ProductDetail>
                      <PriceDetail>
                          <ProductAmountContainer>
                          {/* <Remove/> */}
                              {/* <ProductAmount></ProductAmount> */}
                             {/* <Add/> */}
                          </ProductAmountContainer>
                          
                          <ProductPrice>{product.price * product.quantity}.00 Rs</ProductPrice>
                      </PriceDetail>
                      <DeleteButton onClick ={()=>{
                        const confirmBox = window.confirm("The item will be deleted from your basket")
                        if(confirmBox===true)
                        handleRemove({product})}}>
                          Remove</DeleteButton>
                  </Product>)):
                  <div style={{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px"}}>
                  <span style={{color:"gray",fontWeight:500,textAlign:"center",}}>Your basket is empty</span>
                  </div>}
              </Info>
              <Summary>
             <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText></SummaryItemText>
              <SummaryItemPrice></SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemPrice></SummaryItemPrice>
            </SummaryItem>
            
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>RS {total}.00</SummaryItemPrice>
            </SummaryItem>
           
            <Button onClick ={handleClick}>PLACE ORDER</Button>
            
            </Summary>
          </Bottom>
      </Wrapper>
      <Footer/>
  </Container>
  )
};

export default Bag;
