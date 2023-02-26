import React from 'react';
import './BgContent.css';
import WbTwilightOutlinedIcon from '@mui/icons-material/WbTwilightOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';

const BgContent = () => {
  return (
    <div className="bg-content">
      <div className="bg-country">
       <div className="bg-country-icon"><NearMeOutlinedIcon/></div> <h2> New York, USA</h2>
        <p><WbTwilightOutlinedIcon />07:19</p>
      </div>
      <div className="bg-date">
        <p>Today 28 Sept</p>
        <p> <WbTwilightOutlinedIcon />19:32</p>
      </div>
    </div>
  )
}

export default BgContent
