import React from 'react';
import styled from 'styled-components';
import { mobile } from '../Responsive';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {login} from "../redux/apiCalls"
import {useDispatch,useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    width:100vw;
    height: 100vh;
    background: linear-gradient(#0000007a,
    #0000007b),
     url("https://images.pexels.com/photos/2280567/pexels-photo-2280567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") center center;
     background-size: cover;
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
    font-weight: 600;
    text-align: center;
`
const Form = styled.form`
    display:flex;
    flex-direction: column;
`
const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 10px 0px;
    padding:15px;
    color:black;
    font-size:15px;
    outline:none;
    font-weight: 600;
    border:none;
    border-bottom :1px solid gray;
`
const Button = styled.button`
    width:100%;
    border: none;
    padding :15px 20px;
    background-color:teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;

`
const Error = styled.span`
    color:red;
    font-size: 14px;
    text-align: center;
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

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {isFetching , isError, logged} = useSelector((state)=>state.user)
     

    const handleSubmit =  (e)=>{
        e.preventDefault()
        login(dispatch,{email,password})
        logged && navigate("/home")
        
        
    }
  return (
    <Container> 
    <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={handleSubmit}>
            <Input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder='Email' required autoFocus/>
            <Input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder='Password' required/>
            <Button type="submit">{isFetching ? <span>Loading...</span> : <span>LOGIN</span>}< /Button>
            { isError ? <Error>Invalid username or password</Error>:<></>}
            <Links>
            <Options>Forgot Password?</Options>
            <Link to ="/register">
            <Options>Create a new account</Options>
            </Link>
            </Links>
            
        </Form>
    </Wrapper>
</Container>
  )
};

export default Login;