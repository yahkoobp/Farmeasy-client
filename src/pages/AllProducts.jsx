import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import LoginNavbar from '../components/LoginNavbar';
import Products from '../components/Products';
import { mobile } from '../Responsive';

const Container = styled.div`
 padding-top:0px;
`
const Title = styled.h1`
  margin:0px;
  padding-top: 15px;
`
const FilterContainer = styled.div`
  display:flex;
  justify-content: space-between;

`
const Filter = styled.div`
  margin: 20px;
  ${mobile({margin:"0px 20px",display:"flex",flexDirection:"column"})}
`
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({marginRight:"0px"})}
`
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({margin:"10px 0px"})}
`
const Option = styled.option`
  
`
const AllProducts = () => {
 
  return (
    <Container>
        <LoginNavbar/>
      <Title>All Products</Title>
      <FilterContainer>
           <Filter>
             <FilterText>Filter Products:</FilterText>
             <Select name="Locality">
             <Option value="">
              Locality
            </Option>
            <Option value="Mananthavady">Mananthavady</Option>
            <Option value="Kalpetta">Kalpetta</Option>
            <Option value="Sulthan Bathery">Sulthan Bathery</Option>
             </Select>
             </Filter>
           <Filter>
             <FilterText>Sort Products:</FilterText>
             <Select>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
             </Filter>
      </FilterContainer>
      <Products/>
      <Footer/>
    </Container>
  )
};

export default AllProducts;