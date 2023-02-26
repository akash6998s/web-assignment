import React from 'react';
import "./Box2.css";
import GaugeChart from "react-gauge-chart";
import AirIcon from '@mui/icons-material/Air';

const Box2 = () => {
    return (
        <div className="box2">
            <div className="box-1-header">
                <div className="box-1-heading">
                    <h1>Wind</h1>
                </div>
                <div className="box-1-icon">
                    <AirIcon />
                </div>
            </div>
            <div className="guarge"><GaugeChart /></div>
            <h1 className='box-2-km'>8 km/h</h1>
        </div>
    )
}

export default Box2
