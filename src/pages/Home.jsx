import React from 'react'
import HeroBackground from '../assets/images/home/heroBackground.avif'
import HeroCenter from '../assets/images/home/heroCenter.avif'
import twologo from '../assets/images/home/two-logo.png'
import Button from '@mui/material/Button';
import '../styles/home.css'
import card01 from '../assets/images/product/card01.png'
import card02 from '../assets/images/product/card02.png'
import thumbnail01 from '../assets/images/product/thumbnail01.png'
import thumbnailLogo from '../assets/images/product/thumbnailLogo.png'
import promoBanner from '../assets/images/home/promo-banner.png'
import promoImg01 from '../assets/images/home/promo-img01.png'
import promoLogo01 from '../assets/images/home/promo-logo01.png'
import primeLogo01 from '../assets/images/home/prime-logo01.png'
import mainBackground from '../assets/images/home/mainBackground.avif'

const Home = () => {
  return (
   <>
     <div className='home__index'>
        <img className='background-img' src={HeroBackground} alt="Home Background Image" />
        <div className="container">
            <div className="row">
                <div className="home__content">
                    <div className="home__text col-lg-6">
                        <img src={twologo} alt="" />
                        <h1>Ready Player: Two</h1>
                        <p>Game, stream and create.</p>
                        <Button variant="contained">Shop Player: Two</Button>
                    </div>
                    <div className="home__thumbnail col-lg-6">
                    <img className='home-img' src={HeroCenter} alt="Image" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="player-two-card">
        <div className="container">
            <div className="row">
            {/* <p>A PC BUILT TO GAME</p>
            <p>Player: Two brings powerful, built-to-last performance to anything from competitive FPS to breathtaking RPGs.</p> */}
            </div>
            <div className="two-card-item">
                <div className="card-item">
                    <div className="card-thumbnail">
                        <img src={card01} alt="Image" />                        
                    </div>
                    <div className="card-header">
                        <p className='card-title'>
                        Player: Two
                        </p>
                        <p className='subtitle'>H5 Elite RTX 4070 Gaming PC</p>
                    </div>
                    <div className="card-main">
                        <p className='main-title'>Key Specs</p>
                        <p className="main-text">AMD Ryzen™ 5 5600X</p>
                        <p className="main-text">NVIDIA® GeForce RTX™ 4070</p>
                        <p className="main-text">16GB (2 x 8GB) 3200 MHz (max speed)</p>
                    </div>
                    <div className="card-price">
                        <p>$1,599.00</p>
                    </div>
                    <div className="shop-btn">
                        <Button variant="contained">Shop</Button>
                    </div>
                </div>
                <div className="card-item">
                    <div className="card-thumbnail">
                        <img src={card02} alt="Image" />                        
                    </div>
                    <div className="card-header">
                        <p className='card-title'>
                        Player: Two
                        </p>
                        <p className='subtitle'>H5 Elite RTX 4070 Gaming PC</p>
                    </div>
                    <div className="card-main">
                        <p className='main-title'>Key Specs</p>
                        <p className="main-text">AMD Ryzen™ 5 5600X</p>
                        <p className="main-text">NVIDIA® GeForce RTX™ 4070</p>
                        <p className="main-text">16GB (2 x 8GB) 3200 MHz (max speed)</p>
                    </div>
                    <div className="card-price">
                        <p>$1,599.00</p>
                    </div>
                    <div className="shop-btn">
                        <Button variant="contained">Shop</Button>
                    </div>
                </div>
                <div className="thumbnail__end">
                    <img className='thumbnail-img' src={thumbnail01} alt="Card Image" />
                    <div className="card-body">
                        <img src={thumbnailLogo} alt="Logo" />
                        <div className="content">
                            <p>Build that dream setup with great prices on a custom build.</p>
                            <div className="customize-btn">
                            <Button variant="outlined">Customize</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="promo__banner">
        <div className="container">
            <div className="row">
                <div className="image-block">
                <img className='banner-main' src={promoBanner} alt="Promo Banner" />
                <div className="promo-block">
                <img className='promo-img' src={promoImg01} alt="Promo Image" />
                </div>
                <div className="promo-content-index">
                <div className="promo-content">
                    <img src={promoLogo01} alt="" />
                    <h3>Rise Against Evil</h3>
                    <div className='description'>Get Diablo® IV with select GeForce RTX 40 Series Prebuilt or Custom PC*</div>
                    <p>*Any GeForce RTX 4090, 4080, 4070 Ti, 4070 PC.</p>
                    <div className="more-btn">
                        <Button variant="outlined">Learn More</Button>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    <div className="main-wrapper">
        <div className="wrapper-content">
            <h1>Player: Prime</h1>
            <div>
            <p><em>Player: Prime</em> 
            variants include an upgraded GPU, CPU and the latest NZXT PC cases, for maximum performance and style. Take your gaming to the next level with 
            <em>Player:&nbsp;Prime</em>.</p>
            </div>
        </div>
            <img src={mainBackground} alt="" />
    </div>
   </>
  )
}

export default Home