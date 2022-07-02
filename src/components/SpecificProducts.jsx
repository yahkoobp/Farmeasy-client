import React from 'react';
import styled from 'styled-components';
import { allproducts } from '../data';
import Product from './Product';
import SpecificProduct from './SpecificProduct';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Products = () => {

  return  (
  <Container>
       {
       allproducts.map(item =>(
            <SpecificProduct item={item} key={item.id}/>
        ))}
   </Container>
  )
};

export default Products;
