import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import LoginNavbar from '../components/LoginNavbar';
import { mobile } from '../Responsive';
import { subcategories,categories,allproducts } from '../data';
const Container = styled.div`
     
`
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding:"10px"})}
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border :${props =>props.type==='filled' && 'none'};
    background-color :${props =>props.type==='filled' ? 'black' : "transparent"};
    color :${props =>props.type==='filled' && 'white'};
`
const TopTexts =styled.div`
  ${mobile({display:"none"})}
`
const TopText =styled.span`
   text-decoration: underline;
   cursor: pointer;
   margin:0px 10px;
`

const Bottom = styled.div`
    display:flex;
    justify-content: space-between;
    ${mobile({flexDirection:"column"})}
`
const Info = styled.div`
    flex:3;
    
`
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom:1px solid lightgray;
  ${mobile({flexDirection:"column"})}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  margin:5px 0px;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({margin:"5px 15px"})}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({marginBottom:"20px"})}
`;
const Hr= styled.hr`
    background-color:#eee ;
    border: none;
    height:1px;
`
const Summary = styled.div`
    flex:1;
    border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`
const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;
const Bag = () => {
  return(
  <Container>
      <LoginNavbar/>
      <Wrapper>
          <Title>YOUR BAG</Title>
          <Top>
              <TopButton>CONTINUE SHOPPING</TopButton>
              <TopButton type='filled'>CHECKOUT NOW</TopButton>
          </Top>
          <Bottom>
              <Info>
                  {allproducts.map(product=>(
                      <Product>
                      <ProductDetail>
                          <Image src={product.image} />
                          <Details>
                              <ProductName><b>Product:</b> {product.subcat}</ProductName>
                              <ProductId><b>ID:</b> {product.id}</ProductId>
                              <ProductSize><b>Quantity:</b>{product.size}</ProductSize>
                          </Details>
                      </ProductDetail>
                      <PriceDetail>
                          <ProductAmountContainer>
                          <Remove/>
                              <ProductAmount>1 kg</ProductAmount>
                             <Add/>
                          </ProductAmountContainer>
                          <ProductPrice>30 rs</ProductPrice>
                      </PriceDetail>
                  </Product>))}
              </Info>
              <Summary>
             <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>30 rs</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemPrice></SummaryItemPrice>
            </SummaryItem>
            
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>rs </SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
            </Summary>
          </Bottom>
      </Wrapper>
      <Footer/>
  </Container>
  )
};

export default Bag;