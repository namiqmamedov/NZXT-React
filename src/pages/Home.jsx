import React from "react";
import HeroBackground from "../assets/images/home/heroBackground.avif";
import BottomThumbnail from "../assets/images/home/bottomThumbnail.avif";
import HeroCenter from "../assets/images/home/heroCenter.avif";
import HeroCenterSr from "../assets/images/home/heroCenterSr.avif";
import twologo from "../assets/images/home/two-logo.png";
import Button from "@mui/material/Button";
import "../styles/home.css";
import card01 from "../assets/images/product/card01.png";
import card02 from "../assets/images/product/card02.png";
import brand01 from "../assets/images/home/brand01.png";
import brand02 from "../assets/images/home/brand02.png";
import brand03 from "../assets/images/home/brand03.png";
import thumbnail01 from "../assets/images/product/thumbnail01.png";
import thumbnailLogo from "../assets/images/product/thumbnailLogo.png";
import affirmLogo from "../assets/images/home/affirmLogo.png";
import primeLogo01 from "../assets/images/home/prime-logo01.png";
import mainBackground from "../assets/images/home/mainBackground.avif";
import mainBackgroundSr from "../assets/images/home/mainBackgroundSr.avif";
import mainBackground2 from "../assets/images/home/mainBackground2.png";
import mainBackground2Sr from "../assets/images/home/mainBackground2Sr.png";
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
import { Link } from "react-router-dom";
import productData from '../data/products'
import ProductCard from "../components/UI/ProductCard/ProductCard";


const brandData = [
  {
    id: "01",
    image: brand01,
    desc: "“Offering real-world performance data is a great idea, and makes the process of ordering a PC much less abstract for newcomers.”",
  },
  {
    id: "02",
    image: brand02,
    desc: "“There’s something lovely about having a PC that comes with a set of guaranteed predicted frames-per-second targets for the games I planned.”",
  },
  {
    id: "03",
    image: brand03,
    desc: "“This is certainly a very neat idea, and the company is putting its money where its mouth is regarding the frame-rate estimations.”",
  },
];

const Home = () => {
  return (
    <>

      <section className="home__index">
        <img
          className="background-img"
          src={HeroBackground}
          alt="Home Background Image"
        />
        <div className="container">
          <div className="row">
            <div className="home__content">
              <div className="home__text col-lg-6">
                <img src={twologo} alt="Logo" />
                <h1>Ready Player: Two</h1>
                <p>Game, stream and create.</p>
                <Button variant="contained">Shop Player: Two</Button>
              </div>
              <div className="home__thumbnail col-lg-6">
                <picture>
                  <source media="(min-width: 992px)" srcset={HeroCenter} />
                  <source media="(max-width: 992px)" srcset={HeroCenterSr} />
                  <img
                    className="background-img"
                    src={HeroCenter}
                    alt="Main Image"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="player-two-card">
        <div className="container">
          <div className="row">
            {/* <p>A PC BUILT TO GAME</p>
            <p>Player: Two brings powerful, built-to-last performance to anything from competitive FPS to breathtaking RPGs.</p> */}
          </div>
          <div className="two-card-item">
            <div className="card-item">
              <div className="card-thumbnail">
                <img src={card01} alt="Image" />
                <div className="quick-shop">
                  <p>Quick Shop</p>
                </div>
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
                <div className="quick-shop">
                  <p>Quick Shop</p>
                </div>
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
                id="thumbnail-img"
                className="thumbnail-img"
                src={thumbnail01}
                alt="Card Image"
              />
              <div
                style={{
                  background:
                    "linear-gradient(rgba(28, 29, 30, 0), rgb(28, 29, 30))",
                }}
                className="background-sr"
              ></div>
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
      </section>
      <section className="main-wrapper">
        <div className="wrapper-content">
          <div className="wrapper-text">
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
          <picture>
            <source media="(min-width: 992px)" srcset={mainBackground} />
            <source media="(max-width: 992px)" srcset={mainBackgroundSr} />
            <img
              className="background-img"
              src={mainBackground}
              alt="Main Image"
            />
          </picture>
        </div>
      </section>
      <section className="newest-releases">
        <div className="container">
          <div className="row">
            <h2 className="title">Our Newest Releases</h2>
            <p className="subtitle">
              Unleash the full potential of your gaming rig with NZXT's newest
              PC components, engineered for speed, precision, and unmatched
              reliability.
            </p>
            <div className="card__main">
              <div style={{ backgroundColor: "#E4DAFF" }} className="card-full">
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
                <img
                  className="background-img"
                  src={newsCard01}
                  alt="Card Image"
                />
              </div>
              <div className="card-full">
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
              <div className="card-full">
                <div className="image-block">
                  <img src={newsCard03} alt="Card Image" />
                </div>
                <div className="card-full-content text-white">
                  <h3>H5 Flow RGB & H7 Flow RGB</h3>
                  <p>The brighter side of the H Series.</p>
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
              <div style={{ background: "#000000" }} className="card-full">
                <div className="card-full-content text-white">
                  <h3>Capsule Mini</h3>
                  <p>
                    Capture unexpectedly big sound on the excitingly small
                    Capsule Mini.
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
                <img
                  className="background-img"
                  src={newsCard04}
                  alt="Card Image"
                />
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
      </section>
      <section className="shop-bestseller">
        <div className="container">
          <div className="row">
            <h1 className="title">Shop NZXT Bestsellers</h1>
            <p className="subtitle">
              Join the thousands of PC gamers who have made NZXT's best-selling
              PC products their go-to choice for top-tier performance,
              reliability, and style.
            </p>
            <div className="shop-index">
              {productData.map((item,index) => (
                <ProductCard item={item} key={index} />            
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="main-content-grid">
        <div className="container">
          <div className="row">
            <div className="full-main">
              <div className="main-content">
                <img src={affirmLogo} alt="Affirm Logo" title="Affirm Logo" />
                <h3>Pay Later with Affirm</h3>
                <p>
                  Buy now, pay over time. Quick and easy. No hidden fees. Select
                  "Affirm monthly payments" during checkout.
                </p>
              </div>
              <div className="image-block">
                <picture>
                  <source media="(min-width: 768px)" srcset={mainBackground2} />
                  <source
                    media="(max-width: 768px)"
                    srcset={mainBackground2Sr}
                  />
                  <img
                    className="background-img"
                    src={mainBackground2}
                    alt="Main Image"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="brand-content">
        <div className="container">
          <div className="row">
            <h1 className="title">What Others Say</h1>
            <div className="card-main">
              {brandData.map((item, index) => (
                <div className="card-item" key={index}>
                  <div className="card-body">
                    <img
                      src={item.image}
                      alt="Brand Image"
                      title="Brand Image"
                    />
                    <div className="description">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bottom-thumbnail">
        <div className="content text-center">
          <p className="text-white">NZXT</p>
          <h1>Prebuilt Power to Love</h1>
          <Link>
            Shop Player PCs
            <MdKeyboardArrowRight />
          </Link>
        </div>
        <img src={BottomThumbnail} alt="Thumbnail" title="Thumbnail" />
      </section>
    </>
  );
};

export default Home;
