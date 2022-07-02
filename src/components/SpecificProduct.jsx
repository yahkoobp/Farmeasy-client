import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import {allproducts} from "../data"
import LoginNavbar from './LoginNavbar';

const Container = styled.div`
    flex:1;
    margin-top:10px;
    margin-left:10px;
    margin-right:10px;
    min-width: 200px;
    height:300px;
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position:relative;
    border-radius: 5px;
    border:1px solid gray;
`

const SpecificProduct = ({item}) => {
  
  return  (
   
  <Container>
   
  </Container>

  )
};

export default SpecificProduct;