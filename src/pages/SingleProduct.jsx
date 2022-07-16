import { Add, Remove, SettingsOverscanOutlined,DeleteOutlineOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import Footer from '../components/Footer';
import LoginNavbar from '../components/LoginNavbar';
import { mobile } from '../Responsive';
import {useState,useEffect} from "react"
import { useLocation } from 'react-router-dom';
import axios from "axios"
import { useSelector,useDispatch } from 'react-redux';
import Products from '../components/Products';
import { addProduct } from '../redux/basketRedux';
import { addToCart } from '../redux/apiCalls';

const Container = styled.div`
    
`
const Nav = styled.div`
    
`
const Wrapper = styled.div`
    padding:100px;
    display:flex;
    ${mobile({flexDirection:"column" , paddingTop:"100px"})}
`
const InnerContainer = styled.div`
    flex:1;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 300px;
    width:200px;
    border :1px solid gray

`
const InfoContainer = styled.div`
    flex:1;
    padding:0px 50px;
    margin:40px 0px;
    ${mobile({padding:"10px"})}
`
const Title = styled.h1`
    font-weight: 400;
    margin:10px 0px;

`
const Seller = styled.h3`
    margin:10px 0px;
`
const City =styled.h3`
    margin:10px 0px;
`
const Desc = styled.p`
    margin:20px 0px;
`
const Price = styled.span`
    font-weight: 300;
    font-size: 40px;
    margin-left:25px;
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
        border-radius: 20px;
    }
`

const SingleProduct = () => {
    
    const location = useLocation()
    const id = location.pathname.split("/")[2]
    const [product,setProduct] = useState([])
    const [quantity,setQuantity] = useState(1)
    /* const [basketQuantity,setBasketQuantity] =useState(0)  */
    const user = useSelector((state)=>state.user)
    const user_id = user.currentUser.data._id 
    const currentuser = user.currentUser
   
    /* const productsArray = basket.products */
    /* const basketQuantity = basket.quantity */
    const dispatch = useDispatch()
    const [basketQuantity,setBasketQuantity] = useState(0)
    const [bag,setBag]=useState([])

    /* console.log(user_id) */
    const basket = useSelector((state)=>state.basket)
    const basketCount = basket.quantity

    useEffect(()=>{
        const getProducts = async ()=>{
            try {
              const res = await axios.get(
                "http://localhost:5000/api/product/find/"+id)
              /* console.log(res) */
              setProduct(res.data)
            } catch (error) {
              console.log(error)
            }
          }
          getProducts();
    },[id])

    /* useEffect(()=>{
  const getBag = async ()=>{
    try {
      const res = await axios.get(`http://localhost:5000/api/basket/find/${user_id}`) 
       console.log(res)
     } catch (error) {
      console.log(error)
    }
  } 
   getBag();
 })  */

 /* useEffect(()=>{
  const UpdateBasketCount = async ()=>{
    try {
          const res = await axios.put(`http://localhost:5000/api/basket/count/${user_id}`,{basketCount})
         
          console.log(res.data)
          setBasketQuantity(res.data)
          

     } catch (error) { 
      console.log(error)
    }
  }
    UpdateBasketCount();
 },[basketCount]) */

 useEffect(()=>{
  const getProducts = async ()=>{
    
    try {
      const res = await axios.get(`http://localhost:5000/api/basket/find/${user_id}`)
      console.log(res)
      setBag(res.data.cartProducts)
      const basketQuantity = bag.length
      dispatch(addProduct({basketQuantity}))
    } catch (error) {
      console.log(error)
    }
  }
  getProducts();
 })
 

    const handleQuantity =(type)=>{
       if(type==="dec"){
        quantity > 1 && setQuantity(quantity-1)
       }
       else{
        setQuantity(quantity + 1)
       }
    }
    
   const handleClick = ()=>{
     /* setBasketQuantity(basketQuantity + 1) */
     axios.post (`http://localhost:5000/api/basket/${user_id}`,{...product,quantity})
    .then((res) => {

    }).catch((error) => {
        console.log(error.response.data)
    });
   
    
     dispatch(addProduct({basketQuantity}))

    /* addToCart(dispatch,{userId:user_id,products:productsArray}) */

   }
  return (
  <Container>
    <Nav>
     <LoginNavbar/>
     </Nav>
     <Wrapper>
         <InnerContainer>
             <Title>{product.title}</Title>
             <Seller>seller :</Seller>
             <City>city :</City>
         </InnerContainer>
         <InfoContainer>
             <Title>{product.title}</Title>
             <Desc></Desc>
             <Price>{product.price * quantity}</Price>
            
             <AddContainer>
                 <AmountContainer>
                     <Remove onClick={()=>handleQuantity("dec")}/>
                     <Amount>{quantity}</Amount>
                     <Add onClick={()=>handleQuantity("inc")}/>
                 </AmountContainer>
                 <Button onClick = {handleClick}> ADD TO BASKET</Button>
             </AddContainer>
         </InfoContainer>
     </Wrapper>
     <Footer/>
  </Container>
  )
};

export default SingleProduct;
