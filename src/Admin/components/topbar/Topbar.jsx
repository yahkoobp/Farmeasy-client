import React from 'react'
import  "./Topbar.css"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Topbar = () => {

  const user = useSelector((state)=>state.user.currentUser)
  const name = user.data.firstname
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">SELLER DASHBOARD</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
           <h4 style={{color:"white",fontWeight:400}}>{}</h4>
          </div>
          <div className="topbarIconContainer">
            <Link to="/newproduct">
             <button style={{border:"none",borderRadius:"5px",padding:"5px",cursor:"pointer"}}>Create New Product</button>
             </Link>
          </div>
          <div className="topbarIconContainer">
          <button style={{border:"none",borderRadius:"5px",padding:"5px",cursor:"pointer"}}>Orders</button>
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default Topbar