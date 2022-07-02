import React from 'react';
import styled from 'styled-components';
import { mobile } from '../Responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width:100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)),
     url("https://images.pexels.com/photos/6508827/pexels-photo-6508827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&") center;
     display:flex;
     background-size: cover;
     align-items: center;
     justify-content: center;
  
`
const Wrapper = styled.div`
    padding: 20px;
    width:25%;
    background-color: #ffffff;
    border-radius: 10px;
    ${mobile({width:"75%"})}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display:flex;

    flex-direction: column;
`
const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 10px 0px;
    padding:10px;
`
const Button = styled.button`
    width:100%;
    border: none;
    padding :15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;

`
const Links = styled.div`
    width:100%;
    display:flex;
    align-items: center;
    justify-content: center;
`
const Options = styled.a`
    margin :5px 10px;
    font-size: 12px;
    text-decoration:underline;
    cursor: pointer;
`

const Login = () => {
  return (
    <Container> 
    <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input type="email" placeholder='Email' required autoFocus/>
            <Input type="password" placeholder='Password' required/>
             <Link to="/home">
            <Button>LOGIN</Button>
            </Link>
            <Links>
            <Options>Forgot Password?</Options>
            <Options>Create a new account</Options>
            </Links>
            
        </Form>
    </Wrapper>
</Container>
  )
};

export default Login;