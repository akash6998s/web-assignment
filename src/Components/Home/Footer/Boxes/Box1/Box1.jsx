import React from 'react';
import './Box1.css';
import OpacityIcon from '@mui/icons-material/Opacity';

const Box1 = () => {
    return (
        <div className='box-1'>
            <div className="box-1-header">
                <div className="box-1-heading">
                   <h1> Humidity</h1>
                </div>
                <div className="box-1-icon">
                    <OpacityIcon />
                </div>
            </div>

            <div className="box-1-main">
                <h1>82%</h1> <p>bad</p>
            </div>

            <div className="box-1-footer">
                <div> <p>good</p>
                    <div className="box-1-line-1"></div></div>
                <div> <p>normal</p>
                    <div className="box-1-line-2"></div></div>
                <div> <p>bad</p>
                    <div className="box-1-line-3">
                    <div className="box-1-sub-line-3"></div>
                    </div></div>
                    
            </div>
        </div>
    )
}

export default Box1
