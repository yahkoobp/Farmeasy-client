import React, { useEffect } from 'react'
import styled from 'styled-components'
import RatingComponent from './RatingComponent'
import {useState} from "react"
import {Rating,Stack} from "@mui/material"
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'


const Container = styled.div`
   
    height: 100vh;
    width: 100vw;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
`
const Wrapper = styled.div`
     height: 100vh;
    width: 100vw;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`
const Opinion = styled.h2`
    color:gray;
`
const Form = styled.form`
    width:30%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    -webkit-box-shadow: 1px 5px 10px 2px rgba(0,0,0,0.31); 
    box-shadow: 1px 5px 10px 2px rgba(0,0,0,0.31);
    border-radius: 5px;
    overflow: hidden;
    margin-top: 30px;
`
const TextArea = styled.textarea`
   width: 100%;
   height: 50%;
   outline: none;
   resize:none;
   margin-left:25px;
   padding:10px;
   border: none;
   font-weight: 500;
   font-size: 15px;
`
const Button = styled.button`
    margin-top: 20px;
    border: none;
    padding:10px;
    font-weight: 600;
    font-size: 15px;
    background-color: orange;
    cursor: pointer;
    letter-spacing: 0.1ch;
    &:hover{
        background-color:#ebae3c;
    }
`
const Review = () => {
    const [rating , setRating] = useState(null)
    const [opinion,setOpinion] = useState("")
    const location = useLocation()
    const s_id = location.pathname.split("/")[2]
    const [totReview,setTotReview] = useState([])
    const navigate = useNavigate()
    const handleRating = (e) =>{
      setRating(e.target.value)
      console.log(rating)
    }

    const handleTextArea = (e) =>{
       setOpinion(e.target.value)
       console.log(opinion)
    }
    useEffect(()=>{
      axios.get(`http://localhost:5000/api/seller/get-seller/${s_id}`).then(res=>{
        // console.log(res.data.ratings)
        setTotReview(res.data.ratings)
      })
     
      console.log(totReview)
    })

    
    let totalRate = 0
    const length = totReview.length
    totReview.map(review=>{
       totalRate = totalRate + Number(review)/length
    },[s_id])
    console.log(totalRate)

    const handleSubmit = ()=>{
        axios.post (`http://localhost:5000/api/seller/rating/${s_id}`,{rating})
        axios.put (`http://localhost:5000/api/seller/totalrating/${s_id}`,{totalRate})
        navigate("/orders")
    }
  return (
    <Container>
        <Wrapper>
            <Opinion>Share Your Experience About The Product</Opinion>
            <Form onSubmit={handleSubmit}>
            <TextArea name="opinion" placeholder='share your experience...' onChange={handleTextArea} autoFocus/>
            <div style={{display:"flex",alignItems:"center"}}>
                <h3 style={{color:"gray"}}>Give your rating :</h3>
                <Stack spacing={2}>
                   <Rating value={rating} onChange = {handleRating} precision={0.5} size="large"/>
                </Stack>
            </div>
            <Button>Submit</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Review