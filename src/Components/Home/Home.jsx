import React from 'react';
import './Home.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';


const Home = () => {
  return (
    <div className='home-page'>
        <Header/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default Home
