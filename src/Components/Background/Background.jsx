import React from 'react';
import './Background.css'
import BgHeader from './BgHeader/BgHeader';
import BgContent from './BgContent/BgContent';
import BgFooter from './BgFooter/BgFooter';
import Home from '../Home/Home';
import bgPic from '../Background/BackgroundPic/background.jpg'


const Background = () => {
    return (
            <div className='background'style={{
                backgroundImage : `url(${bgPic})`
            }}>
                <BgHeader />
                <BgContent />
                <BgFooter />
                <div className="home">
                    <Home />
                </div>
            </div>
    )
}

export default Background
