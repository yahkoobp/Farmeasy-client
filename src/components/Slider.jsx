import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import styled from 'styled-components';
import { sliderData } from '../data';
import { mobile } from '../Responsive';

const Container =styled.div`
 width:100%;
 height:55vh;
 display:flex;
 position:relative;
 top:70px;
 margin:0px 0px;
 overflow:hidden;
 
 ${mobile({display:"none"})}
`
const Arrow = styled.div`
    width:50px;
    height: 80px;
    background-color: #c4b1b1;
    border-radius: 0%;
    display: flex;
    align-items: center;
    justify-content: center;
    position:absolute;
    top:0;
    bottom:0;
    left:${props=>props.direction==="left" && "20px"};
    right:${props=>props.direction==="right" && "20px"};
    margin:auto;
    cursor: pointer;
    opacity:0.5;
    z-index: 2;

`
const Wrapper =styled.div`
  display:flex;
  height:100%;
  transition :all 1.2s ease;
  transform: translateX(${props=>props.slideIndex * -100}vw);
  
`
const Slide =styled.div`
display:flex;
align-items: center;
width:100vw;
height:100vh;
background-color:white;

`
const ImageContainer =styled.div`
display:flex;
height:100%;
width:100%;

`
const Image =styled.img`
/* height:80%; */

height: 100%;
width: 100%;
object-fit:cover;
`
const InfoContainer =styled.div`
flex:1;
height:40%;
width:100px;
overflow-wrap: break-word;
padding:30px;
margin:0px 50px;
margin-bottom: 350px;
`
const Title = styled.h1`
 font-size: 70px;
`
const Desc = styled.p`
 margin :50px 0px;
 font-size: 20px;
 font-weight: 500;
 letter-spacing: 3px;
`
const Button = styled.button`
 padding:10px;
 font-size: 20px;
 background-color: transparent;
 cursor: pointer;
 border :1px solid black;
`


const Slider = () => {

  const [slideIndex ,setSlideIndex] = useState(0)

  const handleClick =(direction)=>{
     if(direction==="left"){
       setSlideIndex(slideIndex >0 ? slideIndex-1 :2)
     }else{
      setSlideIndex(slideIndex <2 ? slideIndex+1 :0)
     }
  }
  return (
       <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined style={{width:'160px',height:"50px"}}/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
              {sliderData.map(item=>(
                <Slide  key={item.id}>
               <ImageContainer>
                 <Image src={item.image}></Image>
                  <h2 style={{zIndex:2,position:"absolute",top:100,left:100,color:"white"}}>hello</h2>
               </ImageContainer>
               
               </Slide>
              ))}
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightOutlined style={{width:'160px',height:"50px"}}/>
            </Arrow>
     </Container>
  )
}

export default Slider;
