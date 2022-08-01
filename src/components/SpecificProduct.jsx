import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import {allproducts} from "../data"
import LoginNavbar from './LoginNavbar';
import RatingComponent from './RatingComponent';
import axios from 'axios'


// const Container = styled.div`
//   height: 100vh;
//   width:100%;
//   display:flex;
//   border:1px solid red;
  
//   justify-content: center;
  
//`
const Wrapper = styled.div`
    flex:1;
    margin-top:10px;
    margin-left:20px;
    margin-right:10px;
    width: 300px;
    height:500px;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    position:relative;
    -webkit-box-shadow: 1px 5px 10px 2px rgba(0,0,0,0.31); 
    box-shadow: 1px 5px 10px 2px rgba(0,0,0,0.31);
    
`
const ImageContainer = styled.div`
  width:80%;
  height: 30%;
  margin:10px;
`
const InfoContainer = styled.div`
   display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Image = styled.img`
  width:100%;
  height:100%; 
  object-fit: cover;
  /* opacity: 0.1; */
`
const Title = styled.h2`
  margin: 10px;
  text-align: center;
`
const Price = styled.h4`
    margin: 10px;
    font-size: 20px;
    font-size: 35px;
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
  width:200px;
  height: 35px;
  margin:10px;
  color:white;
  font-size: 15px;
  background-color:red;
  border:1px solid gray;
  border-radius: 25px;
  cursor:pointer;
`

const SpecificProduct = ({item}) => {

  const s_id = item.seller._id
  const [review,setReview] = useState(0)

  useEffect(()=>{
    axios.get(`http://localhost:5000/api/seller/get-seller/${s_id}`).then(res=>{
      // console.log(res.data.ratings)
      setReview(res.data.totalRating)
    })
  
  })
  

  
  return  (
   
    
  <Wrapper>
    <ImageContainer>
    <Image src={item.image ? item.image : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="image not available"></Image>
    </ImageContainer>
    <InfoContainer>
       <Title>{item.title}</Title>
       <Seller>Seller : {item.seller.firstname}</Seller> 
        <Place>Place :{item.Locality}</Place> 
        <RatingComponent value={review}/>
        <Price>{item.price} Rs</Price>
       <Link to={`/single-product/${item._id}`}>
       <Button>View</Button>
       </Link>
       </InfoContainer>
  </Wrapper>

  )
};

export default SpecificProduct;