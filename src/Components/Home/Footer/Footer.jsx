import React from 'react';
import Box1 from './Boxes/Box1/Box1';
import Box2 from './Boxes/Box2/Box2';
import Box3 from './Boxes/Box3/Box3';
import Box4 from './Boxes/Box4/Box4';
import Box5 from './Boxes/Box5/Box5';
import Box6 from './Boxes/Box6/Box6';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-heading">
        <p>More Details of today's weather</p>
        <div className="containers">
          <div className="box"><Box1/></div>
          <div className="box"><Box2/></div>
          <div className="box"><Box3/></div>
        </div>
        <div className="containers">
          <div className="box"><Box4/></div>
          <div className="box"><Box5/></div>
          <div className="box"><Box6/></div>
        </div>
      </div>
    </div>
  )
}


export default Footer;
