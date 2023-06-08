import React from 'react'
import HeroBackground from '../assets/images/home/heroBackground.avif'
import HeroCenter from '../assets/images/home/heroCenter.avif'
import twologo from '../assets/images/home/two-logo.png'
import '../styles/home.css'

const Home = () => {
  return (
    <div className='home__index'>
        <img className='background-img' src={HeroBackground} alt="Home Background Image" />
        <div className="container">
            <div className="row">
                <div className="home__content">
                    <div className="home__text col-lg-6">
                        <img src={twologo} alt="" />
                        <h1>Ready Player: Two</h1>
                        <p>Game, stream and create.</p>
                    </div>
                    <div className="home__thumbnail col-lg-6">
                    <img className='home-img' src={HeroCenter} alt="Image" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home