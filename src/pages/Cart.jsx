import React from 'react'
import '../styles/cart.css'
import Button from '@mui/material/Button';
import img01 from  '../assets/images/thumbnail/prebuilts-primary-web.avif'
import img02 from '../assets/images/thumbnail/bld-primary-web.avif'
import img03 from '../assets/images/thumbnail/offers-primary-web.avif'
import {Link} from 'react-router-dom'
import monitorBanner from '../assets/images/thumbnail/monitor-banner.png'
import products from '../data/products';
import ProductCard from '../components/UI/ProductCard';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import cartImg01 from '../assets/images/thumbnail/cartImg01.png'
import cartImg02 from '../assets/images/thumbnail/cartImg02.png'
import {BiTrash} from 'react-icons/bi'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'
import affirm from '../assets/images/icon/affirm-logo.svg'

const Cart = () => {
  return (
   <>
   <section className='cart-index'>
    <div className="container">
        <div className="row">
        <div className="cart-order col-lg-7">
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="info">All PCs Process in 48 Business Hours.</Alert>
            </Stack>
           <div className="cart-flex">
           <h1 className='font-weight-bold'>Cart</h1>
           <p className="cart-quantity">( 2 )</p>
           </div>
           <div className="cart-main">
            <ul>
                <li className="cart-item">
                    <div className="cart-image">
                        <img src={cartImg01} alt="Cart Image" />
                    </div>
                    <div className="cart-content">
                        <span className="title">NZXT PCIe 4.0 X 16 Riser Cable - AB-RC200-B1</span>
                        <BiTrash className='remove-item'/>
                        <div className="quantity-price">
                        <button className="quantity-btn">
                            <AiOutlinePlus/>
                            <input type="number"  value={1}/>
                            <AiOutlineMinus/>
                        </button>
                        <span>$79.99</span>
                    </div>
                    </div>
                </li>
                {/* <li className="cart-item"></li>
                <li className="cart-item"></li>
                <li className="cart-item"></li>
                <li className="cart-item"></li> */}
            </ul>
           </div>
        </div>
        <div className="cart-total col-lg-5">
            <div className="pay-later-card">
                <img src={affirm} alt="Affirm Logo" />
                <p className='pay-title'>Pay Later with Affirm</p>
                <p className='description'>Buy now, pay over time. Quick and easy. No hidden fees. Select "Affirm monthly payments" during checkout.</p>
            </div>
            <div className="total-card">
                    <h2 className='text-summary'>Summary</h2>
                    <div className="subtotal-flex">
                        <span className='subtotal'>Subtotal</span>
                        <span className='price'>$369.96</span>
                    </div>
                    <div className="taxes-flex">
                        <span className='taxes'>Taxes</span>
                        <span>Calculated at checkout</span>
                    </div>
                    <div className="shipping-flex">
                        <span className='shipping'>Estimated shipping</span>
                        <span>Calculated at checkout</span>
                    </div>
                    <div className="affirm-text">
                        <span>As low as $34/mo with <img src={affirm} alt="Affirm Logo" /> <Link>Learn more</Link> </span> 
                    </div>
                    <Link className="checkout-btn">
                        <Button variant="contained">Proceed to Checkout</Button>
                    </Link>
                    <div className="bottom-content">
                        <p>
                            <em>New and/or refurbished products may process and ship at different times.</em>
                        </p>
                    </div>
            </div>
        </div>
        </div>
    </div>
   </section>
     <section className='cart-empty'>
        <div className="container">
            <div className="row">
                <div className="cart-base">
                    <h3>Your cart is empty</h3>
                    <p>Need Inspiration? Check out our recommended items to begin building the extraordinary!</p>
                    <Button variant="contained" className='continue-shopping'>Continue Shopping</Button>
                </div>
            </div>
        </div>
    </section>
    <section className="card-thumbnail">
       <div className="container">
        <div className="row">
            <div className="card-index">
            <div className="card-item">
                <div className="card-thumbnail">
                    <img src={img01} alt="Cart Image" />
                </div>
                <div className="card-body">
                    <h3>Shop Prebuilts</h3>
                    <Link>
                    Shop Prebuilt PCs
                    </Link>
                </div>
            </div>
            <div className="card-item">
                <div className="card-thumbnail">
                    <img src={img02} alt="Cart Image" />
                </div>
                <div className="card-body">
                    <h3>Shop Prebuilts</h3>
                    <Link>
                    Shop Prebuilt PCs
                    </Link>
                </div>
            </div>
            <div className="card-item">
                <div className="card-thumbnail">
                    <img src={img03} alt="Cart Image" />
                </div>
                <div className="card-body">
                    <h3>Shop Prebuilts</h3>
                    <Link>
                    Shop Prebuilt PCs
                    </Link>
                </div>
            </div>
            </div>
        </div>
       </div>
    </section>
      <section className="main-content-grid">
        <div className="container">
          <div className="row">
            <div className="full-main">
              <div className="main-content">
                <p>New</p>
                <h3>Pay Later with Affirm</h3>
                <p>
                  Buy now, pay over time. Quick and easy. No hidden fees. Select
                  "Affirm monthly payments" during checkout.
                </p>
                <Button variant="outlined" className='shop-btn'>Shop QHD Monitors</Button>
              </div>
              <div className="image-block">
                <picture>
                  <source media="(min-width: 768px)" srcset={monitorBanner} />
                  <source
                    media="(max-width: 768px)"
                    srcset={monitorBanner}
                  />
                  <img
                    className="background-img"
                    src={monitorBanner}
                    alt="Main Image"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="shop-bestseller">
        <div className="container">
          <div className="row">
            <h2 className='title-main'>Before You Go...</h2>
            <div className="shop-index">
              {products.slice(0,8).map((item,index) => (
                <ProductCard item={item} key={index} />            
              ))}
            </div>
          </div>
        </div>
      </section>
   </>
  )
}

export default Cart