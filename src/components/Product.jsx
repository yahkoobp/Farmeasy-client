import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
const Info = styled.div`
    opacity:0;
    width:100%;
    height:100%;
    position:absolute;
    background-color: rgba(0,0,0,0.2);
    top:0px;
    left:0px;
    z-index:3;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    transition:all 0.5s ease;
    cursor: pointer;
    
`

const Container = styled.div`
    flex:1;
    margin:5px;
    min-width: 280px;
    height:350px;
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: #b1deee;
    position:relative;
    border-radius: 0px;
    -webkit-box-shadow: 1px 5px 10px 2px rgba(0,0,0,0.07); 
box-shadow: 1px 5px 10px 2px rgba(0,0,0,0.07);
    &:hover ${Info}{
        opacity:1;
    }
    
`
const Skelton = styled.div`
    flex:1;
    margin:5px;
    width: 280px;
    height:350px;
    display:flex;
    align-items: center;
    justify-content: center;
   
    position:relative;
    
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

    @keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: .5;
    }
    }
`



const Circle = styled.div`
    width:200px;
    height:200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`
const Image = styled.img`
    height:75%;
    z-index:2;
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Icon = styled.div`
    width:40px;
    height:40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition:all 0.5s ease;

    &:hover{
        background-color: #e9f5f5;
        transform:scale(1.1)
    }
`


const Product = ({item}) => {
    // const navigate = useNavigate()
    // setInterval(() => {
    //        navigate("/")
    //   }, 5000);
    // console.log(item.subcat)
  return  (

  <Container>
    <Circle></Circle>
      <Image src={item.image ? item.image : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}/>
    <Info>
         <h2 style={{color:"white"}}>{item.title}</h2>
         <Link to ={`/${item.category}/${item.subcat}`}>
         <Icon>
            {/* <Link to="/specific-products"> */}
            <SearchOutlined/>
            {/* </Link> */}
        </Icon>
        </Link>
    </Info>
  </Container>
  )
};

export default Product;