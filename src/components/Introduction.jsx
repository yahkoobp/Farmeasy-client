import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive';

const Container = styled.div`
      width:100%;
      height: 100vh;
      margin-top:0px;
      background: linear-gradient(rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)),
     url("https://images.pexels.com/photos/6508827/pexels-photo-6508827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&") center center;
     background-size: cover;
     ${mobile({width:"100%"})}
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
    margin:100px 40px;
    font-size: 50px;
    font-weight:500;
    color:darkgreen;
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
       <Wrapper>
          <IntroContainer>
          <Intro>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero et anim</Intro>
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