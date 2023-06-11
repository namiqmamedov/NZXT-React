import React from "react";
import HeroBackground from "../assets/images/home/heroBackground.avif";
import HeroCenter from "../assets/images/home/heroCenter.avif";
import twologo from "../assets/images/home/two-logo.png";
import Button from "@mui/material/Button";
import "../styles/home.css";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import card01 from "../assets/images/product/card01.png";
import card02 from "../assets/images/product/card02.png";
import card03 from "../assets/images/product/card03.avif";
import card04 from "../assets/images/product/card04.avif";
import card05 from "../assets/images/product/card05.avif";
import card06 from "../assets/images/product/card06.avif";
import thumbnail01 from "../assets/images/product/thumbnail01.png";
import thumbnailLogo from "../assets/images/product/thumbnailLogo.png";
import promoBanner from "../assets/images/home/promo-banner.png";
import promoImg01 from "../assets/images/home/promo-img01.png";
import promoLogo01 from "../assets/images/home/promo-logo01.png";
import primeLogo01 from "../assets/images/home/prime-logo01.png";
import mainBackground from "../assets/images/home/mainBackground.avif";
import newsCard01 from "../assets/images/home/newsCard01.png";
import newsCard02 from "../assets/images/home/newsCard02.png";
import newsCard02Item from "../assets/images/home/newsCard02Item.png";
import newsCard03Item from "../assets/images/home/newsCard03Item.png";
import newsCard03 from "../assets/images/home/newsCard03.png";
import newsCard04 from "../assets/images/home/newsCard04.png";
import newsCard05 from "../assets/images/home/newsCard05.png";
import newsCard06 from "../assets/images/home/newsCard06.png";
import newsCard07 from "../assets/images/home/newsCard07.png";
import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <>
      <div className="home__index">
        <img
          className="background-img"
          src={HeroBackground}
          alt="Home Background Image"
        />
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
                <img className="home-img" src={HeroCenter} alt="Image" />
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
                <p className="card-title">Player: Two</p>
                <p className="subtitle">H5 Elite RTX 4070 Gaming PC</p>
              </div>
              <div className="card-main">
                <p className="main-title">Key Specs</p>
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
                <p className="card-title">Player: Two</p>
                <p className="subtitle">H5 Elite RTX 4070 Gaming PC</p>
              </div>
              <div className="card-main">
                <p className="main-title">Key Specs</p>
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
              <img
                className="thumbnail-img"
                src={thumbnail01}
                alt="Card Image"
              />
              <div className="card-body">
                <img src={thumbnailLogo} alt="Logo" />
                <div className="content">
                  <p>
                    Build that dream setup with great prices on a custom build.
                  </p>
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
              <img
                className="banner-main"
                src={promoBanner}
                alt="Promo Banner"
              />
              <div className="promo-block">
                <img className="promo-img" src={promoImg01} alt="Promo Image" />
              </div>
              <div className="promo-content-index">
                <div className="promo-content">
                  <img src={promoLogo01} alt="" />
                  <h3>Rise Against Evil</h3>
                  <div className="description">
                    Get Diablo® IV with select GeForce RTX 40 Series Prebuilt or
                    Custom PC*
                  </div>
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
          <div className="wrapper-main">
            <img src={primeLogo01} alt="" />
            <h1>Player: Prime</h1>
            <div>
              <p>
                <em>Player: Prime</em>
                variants include an upgraded GPU, CPU and the latest NZXT PC
                cases, for maximum performance and style. Take your gaming to
                the next level with
                <em>Player:&nbsp;Prime</em>.
              </p>
            </div>
          </div>
        </div>
        <img className="background-img" src={mainBackground} alt="" />
      </div>
      <div className="newest-releases">
        <div className="container">
          <div className="row">
            <h2 className="title">Our Newest Releases</h2>
            <p className="subtitle">
              Unleash the full potential of your gaming rig with NZXT's newest
              PC components, engineered for speed, precision, and unmatched
              reliability.
            </p>
            <div className="card__main">
              <div style={{backgroundColor: '#E4DAFF'}}
              className="card-full">
                <div className="card-full-content text-grey">
                  <h3>Kraken and Kraken Elite</h3>
                  <p>
                    High-performance cooling with a customizable LCD screen with
                    our all-new Kraken Series.
                  </p>
                  <a>
                    Shop Motherboards
                    <MdKeyboardArrowRight />
                  </a>
                </div>
                <img className="background-img" src={newsCard01} alt="Card Image" />
              </div>
              <div 
               className="card-full">
                <div className="image-block">
                    <img src={newsCard02} alt="Card Image" />
                </div>
                <div className="card-full-content text-grey">
                  <h3>RGB Core Fans</h3>
                  <p>
                    The F Series RGB Core Fans offer brilliant lighting and
                    premium cooling.
                  </p>
                  <a>
                    Shop Core Fans
                    <MdKeyboardArrowRight />
                  </a>
                </div>
                <div className="card-item">
                    <img src={newsCard02Item} alt="Card Image" />
                </div>
              </div>
              <div 
               className="card-full">
                <div className="image-block">
                    <img  src={newsCard03} alt="Card Image" />
                </div>
                <div className="card-full-content text-white">
                  <h3>H5 Flow RGB & H7 Flow RGB</h3>
                  <p>
                    The brighter side of the H Series.
                  </p>
                  <div className="multiple-links">
                    <a>
                      H5 Flow RGB
                      <MdKeyboardArrowRight />
                    </a>
                    <a>
                      H7 Flow RGB
                      <MdKeyboardArrowRight />
                    </a>
                  </div>
                </div>
                <div className="card-item">
                    <img src={newsCard03Item} alt="Card Image" />
                </div>
              </div>
              <div 
               style={{background: '#000000'}}
               className="card-full">
                <div className="card-full-content text-white">
                  <h3>Capsule Mini</h3>
                  <p>
                  Capture unexpectedly big sound on the excitingly small Capsule Mini.
                  </p>
                  <div className="multiple-links">
                    <a>
                    Capsule Mini
                      <MdKeyboardArrowRight />
                    </a>
                    <a>
                    Boom Arm Mini
                      <MdKeyboardArrowRight />
                    </a>
                  </div>
                </div>
                    <img className="background-img" src={newsCard04} alt="Card Image" />
                <div className="card-item">
                </div>
              </div>
              <div className="bottom-card">
                <div className="card-full-bottom">
                  <img src={newsCard05} alt="News Card" />
                  <div className="card__bottom-content">
                    <div className="card-body">
                      <h3>N7 Motherboards</h3>
                      <p>
                        ATX Motherboards with Full Cover, CAM Controls, and
                        Wi-Fi.
                      </p>
                      <a>
                        Shop Motherboards
                        <MdKeyboardArrowRight />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-full-bottom">
                  <img src={newsCard06} alt="News Card" />
                  <div className="card__bottom-content">
                    <div className="card-body">
                      <h3>C1000 PSU</h3>
                      <p>
                        Ideal for PCs that have multiple GPUs and
                        high-performance CPUs.
                      </p>
                      <a>
                        Shop C1000 Gold
                        <MdKeyboardArrowRight />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-full-bottom">
                  <img src={newsCard07} alt="News Card" />
                  <div className="card__bottom-content">
                    <div className="card-body">
                      <h3>Capture Cards</h3>
                      <p>
                        Plug-and-play with ultra-low latency streaming in HD &
                        4K.
                      </p>
                      <a>
                        Shop Capture Cards
                        <MdKeyboardArrowRight />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shop-bestseller">
        <div className="container">
          <div className="row">
            <h1 className="title">Shop NZXT Bestsellers</h1>
            <p className="subtitle">Join the thousands of PC gamers who have made NZXT's best-selling PC
            products their go-to choice for top-tier performance, reliability, and style.</p>
            <div className="shop-index">
              <div className="shop-card">
                  <div className="card-thumbnail">
                    <img src={card01} alt="Shop Card" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Player: Two</h5>
                    <p className="card-subtitle">H5 Elite RTX 4070 Gaming PC</p>
                    <div className="card-bottom">
                      <p className="card-price">$1,599.00</p>
                      <div className="color-options">
                      <FormControl>
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="1"
                            name="radio-buttons-group"
                          >
                            <FormControlLabel className="color-radio" value="1" control={<Radio />}/>
                            <FormControlLabel className="color-radio" value="2" control={<Radio />} />
                          </RadioGroup>
                        </FormControl>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="shop-card">
                  <div className="card-thumbnail">
                    <img src={card01} alt="Shop Card" />
                  </div>
                  <h5 className="card-title">Player: Two</h5>
                  <p className="card-subtitle">H5 Elite RTX 4070 Gaming PC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
