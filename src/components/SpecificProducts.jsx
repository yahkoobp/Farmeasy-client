import React from 'react';
import styled from 'styled-components';
import { allproducts } from '../data';
import Product from './Product';
import SpecificProduct from './SpecificProduct';
import {useState,useEffect} from "react"
import axios from "axios"

const OuterContainer = styled.div`

`
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Title = styled.h1`
 text-align: center;
`
const SpecificProducts = ({subcat,filters,sort}) => {

  const [products,setProducts] =useState([])
  const [filteredproducts,setFilteredProducts] = useState([])
  
  useEffect(()=>{
     const getProducts = async ()=>{
       try {
         const res = await axios.get(
           subcat?
           `http://localhost:5000/api/product/subcat/?subcat=${subcat}`
           :"http://localhost:5000/api/product"
         )
        //  console.log(res.data)
         setProducts(res.data)
        
       } 
       catch (error) {
         console.log(error)
       }
     }
     getProducts();
  },[subcat])

   useEffect(()=>{
      subcat && setFilteredProducts(
        products.filter(item=>
          Object.entries(filters).every(([key,value])=>
          item[key].includes(value)
          )
          )
      )
      console.log(filteredproducts)
  },[subcat,filters,products])

  // console.log(filteredproducts)
    

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return  (
    <OuterContainer>
      <Title>{subcat}</Title>
  <Container>
       { subcat 
      ? filteredproducts.map(item =>(
            <SpecificProduct item={item} key={item._id}/>))
        : products
        .map((item)=><SpecificProduct item={item} key={item._id}/>)}
   </Container>
   </OuterContainer>
  )
};

export default SpecificProducts;
