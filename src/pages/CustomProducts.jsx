import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import LoginNavbar from '../components/LoginNavbar';
import SpecificProducts from '../components/SpecificProducts';
import { mobile } from '../Responsive';
import { useLocation } from 'react-router-dom';
import {useState} from 'react'

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
const CustomProducts = () => {

  const location =useLocation()
  const subcat = location.pathname.split("/")[2]
  const [filters,setFilters] = useState({})
  const [sort , setSort] =useState("newest")
  // console.log(subcat);

  const handleFilters = (e) =>{
    const value = e.target.value 
    setFilters({
        [e.target.name]:value
    })
  }
  console.log(filters)
 
  return (
    <Container>
        <LoginNavbar/>
      <Title>All Products</Title>
      <FilterContainer>
           <Filter>
             <FilterText>Filter Products:</FilterText>
             <Select name="Locality" onChange={handleFilters}>
             <Option value="">
              Locality
            </Option>
            <Option value="Mananthavady">Mananthavady</Option>
            <Option value="Kalpetta">Kalpetta</Option>
            <Option value="Sulthan bathery">Sulthan Bathery</Option>
             </Select>
             {/* <Select name="size">
            <Option disabled>
              size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select> */}
             </Filter>
           <Filter>
             <FilterText>Sort Products:</FilterText>
             <Select onChange={(e)=>setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
             </Filter>
      </FilterContainer>
      <SpecificProducts subcat={subcat} filters={filters} sort = {sort}/>
      <Footer/>
    </Container>
  )
};

export default CustomProducts