import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
      width:100%;
      height: 100vh;
      margin-top:0px;
      background: linear-gradient(#0000007a,
    #0000007b),
     url("https://images.pexels.com/photos/2280567/pexels-photo-2280567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") center center;
     background-size: cover;
     ${mobile({width:"100%"})}
`
const Header = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
    display:flex;
    margin: 0px 100px;
    ${mobile({margin:"0px 0px"})}
    /* background-color: red; */
`
const IntroContainer = styled.div`
   width:90%;
   background:linear-gradient(to bottom,#A5D78D);
   margin:100px 10px;
   min-width:300px;
   ${mobile({margin:"0px 0px"})}
  
   
`
const Intro = styled.p`
    margin:30px 40px;
    font-size: 50px;
    font-weight:700;
    color:white;
    transition: 2s ease-in-out;
    
    ${mobile({fontSize:"20px"})}
  
`
const SideImgContainer=styled.div`
    width:550px;
    height: 350px;
    margin:15px 200px;
    /* box-shadow: 9px 9px 9px rgba(0.25, 0.25, 0.25, 0.25); */
    border-radius: 50%;
`
const SideImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
`
const SignOption=styled.div`
  margin: 0px 0px;
`
const Text=styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
`
const T1=styled.h2`
  
`
const Option=styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrap=styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  margin: 5px 10px;
  border: 0.2px solid gray;
  height: 300px;
  width:300px;
  border-radius: 10px;
`
const O1=styled.h2`
   
`

const Introduction = ()=> {
  return (
    <Container>
       <Header>
       <h1 style={{color:"lightgreen",fontSize:"45px",fontWeight:600,margin:"10px"}}>FarmEasy</h1>
       
       </Header>
       <Wrapper>
          <IntroContainer>
           
          <Intro>Every time you buy organic, you are persuading more farmers to grow organic</Intro>
          <Link to="/register">
          <button style={{padding:"15px",width:"200px",backgroundColor:"orange",border:"none",fontWeight:700,fontSize:"15px",color:"white",marginLeft:"40px",cursor:"pointer"}}>SIGN UP</button>
          </Link>
          <Link to="/login">
          <button style={{padding:"15px",width:"200px",backgroundColor:"orange",border:"none",fontWeight:700,fontSize:"15px",color:"white",marginLeft:"40px",cursor:"pointer"}}>LOGIN</button>
          </Link>
          </IntroContainer>
          <SideImgContainer>
          <SideImg src=""></SideImg>
          </SideImgContainer>
       </Wrapper>
      { /* <SignOption>
         <Text>
         <T1>Register as  ?</T1>
         </Text>
         <Option>
           <Wrap><O1>Producer</O1></Wrap>
           <Wrap><O1>Customer</O1></Wrap>
         </Option>
       </SignOption> */}
    </Container>
  )
}

export default Introduction