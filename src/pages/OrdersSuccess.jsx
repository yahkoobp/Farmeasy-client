import React from 'react'
import { Link } from 'react-router-dom'

const OrdersSuccess = () => {
  return (
    <div>
        <div style={{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
        <h1  style={{color:"green"}}>Congratulations ...Your order is successfull</h1>
        <Link to="/orders">
        <button style={{padding:"10px",border:"none",backgroundColor:"teal",color:"white",borderRadius:"4px",margin:"15px",cursor:"pointer"}}>Go to orders</button>
        </Link>
        </div>
    </div>
  )
}

export default OrdersSuccess