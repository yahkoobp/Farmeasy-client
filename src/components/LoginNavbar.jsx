import { Badge } from '@material-ui/core';
import { ArrowDownward, ArrowDownwardOutlined, ArrowDropDown, ArrowDropDownCircleOutlined, ArrowDropDownOutlined, ArrowDropDownSharp, Search, ShoppingCartOutlined } from '@material-ui/icons';
import { AccountCircleOutlined, AccountCircleRounded, FavoriteBorderRounded, PowerSettingsNewOutlined, Store } from '@material-ui/icons'
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../Responsive';
import NavMenu from './NavMenu';
import {useDispatch,useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom';
import { logout } from "../redux/userRedux"
import { logOut } from '../redux/basketRedux';
import { useEffect } from 'react';

const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    height:65px;
    width:100vw;
    position:fixed;
    z-index: 4;
    background-color:teal;
    ${mobile({height:"50px"})}
`
const Wrapper =styled.div`
  padding :10px 20px;
  display:flex;
  align-items: center;
  justify-content:center;
  flex:1;
  ${mobile({padding:"10px 0px"})}
  

`
const Left =styled.div`
flex:1;
display: flex;
align-items: center;

`
const LogoContainer =styled.div`
   display: flex;
   align-items: center;
   /* justify-content: center; */
   width:70px;
   height:70x;
   ${mobile({width:"50px",height:"50px",marginLeft:"10px"})}
`
const LogoImg = styled.img `
  object-fit: cover;
  max-width: 100%;
 max-height: 100%;
 border-radius:50%;
`
const SearchContainer =styled.div`
  /* border :0.5px solid lightgray; */
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 0px;

 
`
const Input =styled.input`
  border :none;
  padding-left:15px;
  height:35px;
  width:400px;
  &:focus{
    outline: none;
  }
  ${mobile({width:"50px"})}
`
const Center =styled.div`
flex:1;
text-align: center;
`
const Logo = styled.h1`
  font-weight:400;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color:white;
  ${mobile({fontSize:"24px"})}
`
const Right =styled.div`
flex:1;
display :flex;
align-items: center;
justify-content: flex-end;
margin:10px 20px;
${mobile({flex:2,justifyContent:"center"})}
`
const Options=styled.div`
   display:flex;
   align-items: center;
   &:hover tableContainer {
    display:block;
  }
`
const TableContainer=styled.div`
     display:block;
     padding-top:0px;
     z-index:2;
     position: absolute;
     top:10;

`
const Menu = styled.div`
  padding:0px;
  margin-top: 550px;
  margin-left:250px;
  top:400;
  left:100;
  z-index:2;
  display:none;
  
  
`
const OptionsContainer = styled.div`
  &:hover + ${Menu}{
    display:block;
  }
`


const Name=styled.div`
  color:white;
  font-size:18px;
  cursor: pointer;
  &:hover / TableContainer{
      display: none;
  }
  
`
const MenuItem = styled.div`
  color:white;
  font-size: 14px;
  cursor: pointer;
  margin :0px 10px;
  /* margin-left: 30px; */
  ${mobile({fontSize:"12px" , marginLeft:"10px"})}
`


const Table=styled.table`
 /* border:1px solid black; */
 margin:0px 1050px;
 box-shadow:-1px 0px 18px grey;
 
 
`
const Tr=styled.div`
 border: 0.2px solid lightgray;
 margin-top:0px;
 width:200px;
 height: 50px;
 display: flex;
 flex-direction: column;
 align-items:flex-start;
 justify-content:center;
 &:hover{
    background-color:#faf7f7;
 }
`
const Th=styled.div`
/* border: 1px solid black; */
display: flex;
align-items: center;
justify-content:center;
font-weight: 550;
font-size: 17px;
margin:2px 8px;
cursor: pointer;
`
const LoginNavbar = ({basketQuantity}) => {
  const user = useSelector((state)=>state.user.currentUser)
  const quantity = useSelector((state)=>state.basket.quantity)
  const name = user.data.firstname
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const basket = useSelector((state)=>state.basket)
  const products = basket.products
  // const basketCount = basket.quantity
  
  

  const clickHandler = (e)=>{
    e.preventDefault()
    dispatch(logout())
    dispatch(logOut({basketQuantity}))
    navigate("/")
  }
  return (
    <div>
      <Container>
        <Wrapper>
             <Left>
             <LogoContainer>
              <LogoImg src="https://i.pinimg.com/originals/68/92/71/689271e6223bf1ef1e8d70a257d2384b.jpg"></LogoImg>
              </LogoContainer>
             <SearchContainer>
               <Input placeholder='Search'></Input>
               <Search style={{color:"teal" ,fontsize:"20",marginLeft:"0px",backgroundColor:"white",height:"37px",cursor:"pointer",padding:"0px 7px"}}/>
             </SearchContainer>
             </Left>
             <Center><Logo>FarmEasy</Logo></Center>
             <Right>
              <Options>
                <OptionsContainer>
              <Name>Welcome  {name}</Name>
              
              </OptionsContainer>
              <ArrowDropDownOutlined style={{color:"white"}}/>
              </Options>
              <Link to="/seller-request" style={{textDecoration:"none"}}>
              <MenuItem>BECOME A SELLER</MenuItem>
              </Link>
              <MenuItem>
              <Link to="/bag" style={{textDecoration:"none"}}>
              <Badge style={{}}badgeContent={quantity} color="primary">
                <ShoppingCartOutlined style={{color:"white"}}/>
              </Badge>
              </Link>
              </MenuItem>
              <MenuItem onClick={clickHandler}>LOGOUT</MenuItem>
             </Right>
         </Wrapper>
         
    </Container>
               
     
      </div>
  
  )
}

export default LoginNavbar;