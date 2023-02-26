import React from 'react';
import './Box6.css';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

const Box6 = () => {
    return (
        <div className='box-6'>
            <div className="box-6-header">
                <div className="box-6-heading">
                   <h1>Feels like</h1>
                </div>
                <div className="box-6-icon">
                    <BeachAccessIcon />
                </div>
            </div>

            <div className="box-6-main">
                <h1>42%</h1>
            </div>

            <div className="box-6-footer">
                <div> <div className="box-6-footer-head"> <p>0%</p> <p>25%</p> <p>50%</p> <p>75%</p> <p>100%</p></div>
                    <div className="box-6-line">
                    <div className="box-6-sub-line"></div>
                    </div></div> 
            </div>
        </div>
    )
}

export default Box6
