import { AccountCircleOutlined, AccountCircleRounded, ContactPhone, FavoriteBorder, FavoriteBorderOutlined, FavoriteBorderRounded, FavoriteBorderSharp, PowerOffOutlined, PowerSettingsNewOutlined, Store } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
    
`

const Table=styled.table`
 /* border:1px solid black; */
 margin:0px 1050px;
 /* display :none; */
 box-shadow:-1px 0px 18px grey;
 
 
`
const Tr=styled.div`
 border: 0.2px solid lightgray;
 margin-top:0px;
 width:200px;
 height: 50px;
 display: flex;
 flex-direction: column;
 align-items:flex-start;
 justify-content:center;
 &:hover{
    background-color:#faf7f7;
 }
`
const Th=styled.div`
/* border: 1px solid black; */
display: flex;
align-items: center;
justify-content:center;
font-weight: 550;
font-size: 17px;
margin:2px 8px;
`
const NavMenu = () => {
  return (
    <Container>
        <Table>
            <Tr>
                <Th>
                  <AccountCircleRounded style={{color:"blue",marginRight:"15px"}}/>
                    My Profile
                </Th>
            </Tr>
            <Tr>
                <Th>
                    <Store style={{color:"blue",marginRight:"15px"}}/>
                    Orders
                </Th>
            </Tr>
            <Tr>
                <Th>
                    <FavoriteBorderRounded style={{color:"blue",marginRight:"15px"}}/>
                    Wishlist
                </Th>
            </Tr>
            <Tr>
                <Th>
                    <PowerSettingsNewOutlined style={{color:"blue",marginRight:"15px"}}/>
                    Logout
                </Th>
            </Tr>
        </Table>
    </Container>
  )
}

export default NavMenu