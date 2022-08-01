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
   letter-spacing:0.2rem;
   font-family:'Courier New', Courier, monospace;
   font-weight: 500;
   text-align: center;
   color:Green;
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
      [...products].reverse().slice(0,8).map(item =>(
            <Product item={item} key={item.id}/>
        ))}
      </ProductContainer>
   </Container>
  )
};

export default Products;
