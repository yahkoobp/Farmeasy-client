import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import Footer from '../components/Footer';
import LoginNavbar from '../components/LoginNavbar';
import { mobile } from '../Responsive';

const Container = styled.div`
    
`
const Nav = styled.div`
    
`
const Wrapper = styled.div`
    padding:100px;
    display:flex;
    ${mobile({flexDirection:"column" , paddingTop:"100px"})}
`
const ImageContainer = styled.div`
    flex:1;

`
const Image = styled.img`
    width:100%;
    height:90vh;
    object-fit: cover;
    ${mobile({height:"40vh"})}
`
const InfoContainer = styled.div`
    flex:1;
    padding:0px 50px;
    ${mobile({padding:"10px"})}
`
const Title = styled.h1`
    font-weight: 200;

`
const Desc = styled.p`
    margin:20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const AddContainer = styled.div`
    width:50%;
    display: flex;
    align-items:center;
    justify-content: space-between;
    ${mobile({width:"100%"})}
`
const AmountContainer = styled.div`
    display: flex;
    align-items:center;
    font-weight: 700;
`
const Amount = styled.span`
    width:30px;
    height: 30px;
    border-radius: 10px;
    border:1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Button = styled.button`
    padding: 15px;
    border:2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
`

const SingleProduct = () => {

  return (
  <Container>
    <Nav>
     <LoginNavbar/>
     </Nav>
     <Wrapper>
         <ImageContainer>
             <Image/>
         </ImageContainer>
         <InfoContainer>
             <Title></Title>
             <Desc></Desc>
             <Price></Price>
             <AddContainer>
                 <AmountContainer>
                     <Remove/>
                     <Amount>1</Amount>
                     <Add/>
                 </AmountContainer>
                 <Button>ADD TO CART</Button>
             </AddContainer>
         </InfoContainer>
     </Wrapper>
     <Footer/>
  </Container>
  )
};

export default SingleProduct;
