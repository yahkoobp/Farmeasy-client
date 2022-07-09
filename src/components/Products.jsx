import React from 'react';
import styled from 'styled-components';
import { subcategories,categories } from '../data';
import Product from './Product';
import {useState,useEffect} from "react"
import axios from "axios"

const Container = styled.div`
   /* display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center; */

`
const ProductContainer = styled.div`
    margin:0px 50px;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Text = styled.h2`
   font-size: 50px;
   letter-spacing:0.5rem;
   font-weight: 400;
   text-align: center;
`
const Products = ({cat}) => {
 const [products,setProducts] =useState([])
 useEffect(()=>{
    const getProducts = async ()=>{
      try {
        const res = await axios.get(
          cat?
          `http://localhost:5000/api/product/?category=${cat}`
          :"http://localhost:5000/api/product"
        )
        console.log(res)
        setProducts(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getProducts();
 },[cat])
  return  (
  <Container>
    <Text>Explore Products</Text>
      <ProductContainer>
       {
       products.map(item =>(
            <Product item={item} key={item.id}/>
        ))}
      </ProductContainer>
   </Container>
  )
};

export default Products;
