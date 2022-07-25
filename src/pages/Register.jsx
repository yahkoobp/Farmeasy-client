import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import { mobile } from '../Responsive';
import { Visibility } from '@material-ui/icons';
import axios from "axios"
import {Link} from "react-router-dom"
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
    background-color: white;
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
    flex-wrap: wrap;
`
const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding:10px;
    &:invalid[focused="true"] ~ Span{
        display:block;
    }
    
    
`
const Span=styled.span`
    font-size:12px;
    padding: 4px;
    color: red;
    display:none;
`
const Select = styled.select`
    flex:1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding:10px;
`
const Option = styled.option`
    
`
const Aggreement = styled.span`
    font-size: 12px;
    margin:20px 0px;
`
const Button = styled.button`
    width:40%;
    border: none;
    padding :15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    width:100%;
`

const Register = () => {

    const [pass,setPass]=useState()
    const [focus,setFocus]=useState(false)
    const navigate = useNavigate()

const handleSubmit = (e)=>{
    e.preventDefault()
    // console.log(e)
    const data=new FormData(e.target)
    // console.log(Object.fromEntries(data.entries()))
    const finalData=Object.fromEntries(data.entries())
    console.log(finalData)
    axios.post('http://localhost:5000/api/auth/register',finalData)
    .then((res) => {
        console.log(res.data)
    }).catch((error) => {
        console.log(error.response.data)
    });

    navigate("/login")

}
const onChangeHandler = (e)=>{
    setPass(e.target.value)
}
const handleFocus = ()=>{
    setFocus(true)
}



const errorMessages ={
    
        firstname:"Name should be atleast 3 characters",
        lastname:"Last name is required",
        mobno:"Number must be of 10 digits",
        email:"Please enter a valid email",
        phone:"",
        password:"Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters",
        confirmpassword:"Password doesn't match",
        city:"This field is required"

}

  return (
       <Container> 
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form onSubmit={handleSubmit}>
                    <Input name="firstname" placeholder='First Name' required pattern='^[a-zA-Z]{3,16}$'  onBlur={handleFocus}  autoFocus focused ="true"/>
                    <Span>{errorMessages.firstname}</Span>
                    <Input name="lastname" placeholder='Last Name' required pattern='^[a-zA-Z]{1,16}$' />
                    <Span>{errorMessages.lastname}</Span>
                    <Input type="email" name="email" placeholder='Email' required/>
                    <Span>{errorMessages.email}</Span>

                    <Input type="number" name="phone" placeholder='Mob No' required/>
                    <Span>{errorMessages.phone}</Span>
                    
                    <Input name="password" type="text" placeholder='Password'onChange={onChangeHandler} required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"/>
                    <Span>{errorMessages.password}</Span>
                    <Input name="confirmpassword" type="text" placeholder='Confirm Password' required pattern={pass}/>
                    <Span>{errorMessages.confirmpassword}</Span>
                    
                    <Select name ="city" required>
                    <Span>{errorMessages.city}</Span>
                        <Option value="">Select Place</Option>
                        <Option value="Mananthavady">Mananthavady</Option>
                        <Option value="Kalpetta">Kalpetta</Option>
                        <Option value="Sulthan Bathery">Sulthan Bathery</Option>
                    </Select>
                    <Aggreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                   </Aggreement>
                   
                    <Button>CREATE</Button>
                    
                </Form>
            </Wrapper>
       </Container>
  )
};

export default Register;