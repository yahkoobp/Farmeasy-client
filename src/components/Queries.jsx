import { Send } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../Responsive';

const Container = styled.div`
    
`
const Wrapper=styled.div`
    height :60vh;
    background-color:#fcf5f5;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${mobile({width:"100vw"})}
`
const Title = styled.h1`
    font-size: 50px;
    font-weight:400;
    margin-bottom: 20px;
    color:teal;
    ${mobile({fontSize:"20px"})}
`
const Description = styled.div`
    font-size: 15px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({textAlign:"center"})}

`
const InputContainer = styled.div`
    width:50%;
    height:${props=>props.height};
    background-color: white;
    display:flex;
    justify-content: space-between;
    border-radius: 5px;
    border: ${props=>props.border};
    margin:${props=>props.margin};
    ${mobile({width:"80%"})}
`
const Input = styled.input`
    flex:8;
    border: none;
    padding-left:2px;
    margin:0px 0px;
    font-weight: 300;
    font-size: 15px;
    border-radius: 5px;
`
const Textarea=styled.textarea`
 border:none;
 resize:none;
 font-weight: 400;
 font-size: 20px;
 border-radius: 5px;
`
const Button = styled.button`
    width:40%;
    border: none;
    padding :15px 10px;
    background-color: teal;
    color: white;
    cursor: pointer;
    width:50%;
    margin:0px 0px;
    border-radius: 5px;
    &:hover {
        background-color: #069f9f;
    }
`
const Queries = () => {
  return(
       <div>
           <Container>
               <Wrapper>
               <Title>Need help ? Ask the experts.. </Title>
               <Description>Post Your Queries </Description>
               
               <InputContainer height="50px" border="1px solid lightGray">
                <Input placeholder='Email'/>
                {/* <Button>
                    <Send/>
                </Button> */}
               </InputContainer>
               <InputContainer height="200px" margin="20px 0px" border="1px solid lightGray" >
                <Textarea placeholder='Queries...' rows="5" cols="120"/>
                {/* <Button>
                    <Send/>
                </Button> */}
               </InputContainer>
               <Button>SUBMIT</Button>
               </Wrapper>
           </Container>
       </div>
  )
};

export default Queries;
