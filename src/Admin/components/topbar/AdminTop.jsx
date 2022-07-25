import React from 'react'
import  "./Topbar.css"
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { adminLogout } from '../../../redux/adminRedux';
import { useDispatch } from 'react-redux';


const AdminTop = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const clickHandler = (e)=>{
    e.preventDefault()
    dispatch(adminLogout())
    navigate("/admin-login")
  }
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">ADMIN DASHBOARD</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
           <h4 style={{color:"white",fontWeight:400}}>{}</h4>
          </div>
          <div className="topbarIconContainer">
            <Link to="/sellers">
             <button style={{border:"none",borderRadius:"5px",padding:"5px",cursor:"pointer"}}>View Sellers</button>
             </Link>
          </div>
          <div className="topbarIconContainer">
            <Link to="/seller-requests">
          <button style={{border:"none",borderRadius:"5px",padding:"5px",cursor:"pointer"}}>Seller Requests</button>
          </Link>
          </div>

          <div className="topbarIconContainer">

          <button style={{border:"none",borderRadius:"5px",padding:"5px",cursor:"pointer"}} onClick={clickHandler}>Logout</button>
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default AdminTop