import React from 'react';
import "./BgFooter.css";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const BgFooter = () => {
  return (
    <div className="bg-footer">
        <div className="bg-head">
         <div  className='arrow'><ArrowBackIosIcon /></div>
          <h1>27°</h1>
         <div className='arrow'><ArrowForwardIosIcon/></div> 
        </div>
        <div className="bg-para">
          <WbSunnyIcon/>
          <p>Sunny</p>
        </div>
    </div>
  )
}

export default BgFooter
