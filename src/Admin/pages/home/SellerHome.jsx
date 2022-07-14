import React from 'react'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import "./sellerhome.css"
import { userData } from "../../../dummyData"
import Chart from "../../components/chart/Chart";
import WidgetSm from '../../components/widgetsm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';

const SellerHome = () => {
  return (
    <div className='home'>
      {/* <Topbar/>
      <div style={{display:"flex"}}>
       <Sidebar/>
       <div style={{display:"flex",flexDirection:"column",flex:4}}> */}
        <FeaturedInfo/>
        <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
        <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
        </div>
        </div>
        // </div>
        // </div>
  )
}

export default SellerHome