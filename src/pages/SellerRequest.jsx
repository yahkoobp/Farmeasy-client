import React, { useState } from 'react';
import styled from 'styled-components';
import { mobile } from '../Responsive';
import { Visibility } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    width:100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)),
     url("https://images.pexels.com/photos/6508827/pexels-photo-6508827.jpeg?auto=compress&cs=tinysrgb&w=1260") center;
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
    
    
`
const TextArea=styled.textarea`
 min-width: 40%;
 resize:none;
 margin: 20px 10px 0px 0px;
    padding:10px;
 font-weight: 200;
 font-size: 13px;

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

const SellerRequest = () => {

const navigate = useNavigate()
const user = useSelector((state)=>state.user.currentUser)
const u_id=user.data._id
console.log(user.data)
const handleSubmit = (e)=>{
    e.preventDefault()
    const data=new FormData(e.target)
    // console.log(Object.fromEntries(data.entries()))
    const finalData=Object.fromEntries(data.entries())
    console.log(finalData)

    axios.post('http://localhost:5000/api/seller-request/register',{...finalData,u_id})
    .then((res) => {
        console.log(res.data)
    }).catch((error) => {
        console.log(error.response.data)
    });

    navigate("/login")

}
  return (
       <Container> 
            <Wrapper>
                <Title>APPLICATION FORM</Title>
                <Form onSubmit={handleSubmit}>
                    <Input name="firstname" value={user.data.firstname} required pattern='^[a-zA-Z]{3,16}$'/>
                    <Input name="lastname" value={user.data.lastname} required pattern='^[a-zA-Z]{1,16}$' />
                    <Input type="email" name="email" value={user.data.email} required/>                
                    <Input name="address" type="text" placeholder='address' required/>
                    <TextArea name="details" placeholder='details about your organic farming'/>
                    <Select name ="city" required>
                        <Option value="">Select Place</Option>
                        <Option value="Mananthavady">Mananthavady</Option>
                        <Option value="Kalpetta">Kalpetta</Option>
                        <Option value="Sulthan Bathery">Sulthan Bathery</Option>
                    </Select>
                    <Aggreement>
                        By submiting, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                   </Aggreement>
                    <Button>SUBMIT</Button>
                </Form>
            </Wrapper>
       </Container>
  )
};

export default SellerRequest;