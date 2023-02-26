import React from 'react';
import './Box5.css';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';

const Box5 = () => {
    return (
        <div className='box-5'>
            <div className="box-5-header">
                <div className="box-5-heading">
                   <h1>Feels like</h1>
                </div>
                <div className="box-5-icon">
                    <DeviceThermostatIcon />
                </div>
            </div>

            <div className="box-5-main">
                <h1>30°</h1>
            </div>

            <div className="box-5-footer">
                <div> <div className="box-5-footer-head"> <p>0</p> <p>25</p> <p>50</p></div>
                    <div className="box-5-line">
                    <div className="box-5-sub-line"></div>
                    </div></div> 
            </div>
        </div>
    )
}

export default Box5
