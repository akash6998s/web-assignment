import React from 'react';
import "./BgHeader.css";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';

const BgHeader = () => {
  return (
    <div className="bg-header">
      <div className='plus-icon'>
        <AddBoxOutlinedIcon />
      </div>
      <div className="dots-icon">
        <div className="page"></div>
        <div className='page-dot'></div>
        <div className='page-dot'></div>
      </div>
      <div className="degree-icon">
        &#8451;
        <ToggleOffOutlinedIcon />
        &#8457;
      </div>
    </div>
  )
}

export default BgHeader

