import React from 'react';
import './Header.css';
import pic from '../Images/pic.png';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Header = () => {
    return (
        <div className='header'>
                <div className="heading-text">
                    <h1>Welcome Back Akash Singh</h1>
                    <p>Check out today's weather information</p>
                </div>
                <div className="heading-pic">
                <MoreHorizIcon/>
                    <img src={pic} alt="pic" />
            </div>
        </div>
    )
}

export default Header
