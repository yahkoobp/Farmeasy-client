import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import {allproducts} from "../data"
import LoginNavbar from './LoginNavbar';

const Container = styled.div`
    flex:1;
    margin-top:10px;
    margin-left:10px;
    margin-right:10px;
    min-width: 200px;
    height:300px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position:relative;
    border:1px solid gray;
`
const Title = styled.h2`
  margin: 10px;
`
const Price = styled.h4`
    margin: 10px;
    font-size: 20px;
`
const Seller = styled.h4`
    margin: 10px;
    font-size: 20px;
`
const Place = styled.h4`
    margin: 10px;
    font-size: 20px;
`
const Button = styled.button`
  width:100px;
  height: 35px;
  color:white;
  font-size: 15px;
  background-color:teal;
  border:1px solid gray;
  border-radius: 5px;
  cursor:pointer;
`

const SpecificProduct = ({item}) => {
  

  
  return  (
   
  <Container>
       <Title>{item.title}</Title>
       <Price>Rs : {item.price}</Price>
       {/* <Seller>Seller : {item.seller.firstname}</Seller> */}
       {/* <Place>Place :{item.seller.city}</Place> */}
       <Link to={`/single-product/${item._id}`}>
       <Button>View</Button>
       </Link>
  </Container>

  )
};

export default SpecificProduct;