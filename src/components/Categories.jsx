import React from 'react';
import styled from 'styled-components';
import { categories } from '../data';
import CategoryItem from './CategoryItem';
import { mobile } from '../Responsive';

const Container = styled.div`
    margin:0px 0px;
    display:flex;
    padding:70px 20px;
    justify-content: space-between;
    ${mobile({padding:"0px",flexDirection:"column",margin:"0px"})}
`

const Categories = () => {
  return (
   <Container>
        {categories.map(item=>(
            <CategoryItem item={item} key={item.id}/>
        ))}
   </Container>

  
  )
};

export default Categories;