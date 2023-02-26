import React from 'react';
import './Box4.css';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const Box4 = () => {
    return (
        <div className='box-4'>
            <div className="box-4-header">
                <div className="box-4-heading">
                    <h1>UV index</h1>
                </div>
                <div className="box-4-icon">
                    <WbSunnyIcon />
                </div>
            </div>

            <div className="box-4-main">
                <h1>4</h1> <p>medium</p>
            </div>

            <div className="box-4-footer">
                <div> <p>0-2</p>
                    <div className="box-4-line-1"></div></div>
                <div> <p>3-5</p>
                    <div className="box-4-line-2">
                        <div className="box-4-sub-line-2"></div>
                    </div></div>
                <div> <p>6-7</p>
                    <div className="box-4-line-3"></div></div>
                <div> <p>8-10</p>
                    <div className="box-4-line-3"></div></div>
                <div> <p>11+</p>
                    <div className="box-4-line-3"></div></div>

            </div>
        </div>
    )
}

export default Box4
