import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined} from '@material-ui/icons';
import { Link } from 'react-router-dom';

import React from 'react';
import styled from 'styled-components';
import { mobile } from '../Responsive';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height :65px;
    background-color:teal;
    width:100%;
    position: fixed;
    box-shadow: 65px 64px 87px rgba(255, 255, 255, 0.45);
    /* border-bottom: 0.1px solid lightgray; */

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
// const Language =styled.span`
//   font-size: 14px;
//   cursor: pointer;
//   ${mobile({display:"none"})}
// `
const LogoContainer =styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width:75px;
   height:75x;
   ${mobile({width:"50px",height:"50px",marginLeft:"10px"})}
`
const LogoImg = styled.img `
  object-fit: cover;
  max-width: 100%;
 max-height: 100%;
 border-radius:50%;
`
const Input =styled.input`
  border :none;
  ${mobile({width:"50px"})}
`
const Center =styled.div`
flex:1;
text-align: center;
`
const Logo = styled.h1`
  font-weight:400;
  letter-spacing: 0.1em;
  color:white;
  ${mobile({fontSize:"24px"})}
`
const Right =styled.div`
flex:1;
display :flex;
align-items: center;
justify-content:flex-end;
margin-right:0px;
/* border:1px solid red; */
${mobile({flex:1,justifyContent:"flexStart",padding:"0px 0px"})}
`
const MenuItem = styled.h5`
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  color: #ffffff;
  margin:0px 20px;
  /* border: 1px solid white; */
  ${mobile({fontSize:"12px" , marginLeft:"10px",width:"55px"})}
`
const Navbar = () => {
  return (
      <Container>
        <Wrapper>
             <Left>
             <LogoContainer>
              <LogoImg src="https://i.pinimg.com/originals/68/92/71/689271e6223bf1ef1e8d70a257d2384b.jpg"></LogoImg>
              </LogoContainer>
              
             
             </Left>
             <Center><Logo>FarmEasy</Logo></Center>
             <Right>
              <Link to="/login" style={{textDecoration:"none"}}>
              <MenuItem >SIGN IN</MenuItem>
              </Link>
              <Link to="/register" style={{textDecoration:"none"}}>
              <MenuItem >REGISTER</MenuItem>
              </Link>
              {/* <MenuItem>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined/>
              </Badge>
              </MenuItem> */}
             </Right>
         </Wrapper>
      </Container>
  )
}

export default Navbar;
