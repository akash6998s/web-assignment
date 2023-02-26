import React from 'react';
import './Box3.css';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

const Box3 = () => {
    return (
        <div className='box-3'>
            <div className="box-3-header">
                <div className="box-3-heading">
                    <h1> Precipitation</h1>
                </div>
                <div className="box-3-icon">
                    <ThunderstormIcon />
                </div>
            </div>

            <div className="box-3-main">
                <h1>1.4 cm</h1>
            </div>

            <div className="box-3-footer">
                <div> <p>0</p>
                    <div className="box-3-line-1"></div></div>
                <div> <p>10</p>
                    <div className="box-3-line-3">
                        <div className="box-3-sub-line-3"></div>
                    </div></div>
                <div> <p>20</p>
                    <div className="box-3-line-3"></div></div>
                <div> <p>30</p>
                    <div className="box-3-line-3"></div></div>
                <div> <p>40</p>
                    <div className="box-3-line-3"></div></div>
                <div> <p>50</p>
                    <div className="box-3-line-3"></div></div>
                <div> <p>60</p>
                    <div className="box-3-line-3"></div></div>
                <div> <p>70</p>
                    <div className="box-3-line-3"></div></div>
                <div> <p>80</p>
                    <div className="box-3-line-3"></div></div>
                <div> <p>90</p>
                    <div className="box-3-line-3"></div></div>
            </div>
        </div>
    )
}

export default Box3
