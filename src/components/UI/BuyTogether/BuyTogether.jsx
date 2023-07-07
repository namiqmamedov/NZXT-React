import React from 'react'
import buyTogether01 from '../../../assets/images/thumbnail/buyTogether01.png'
import buyTogether02 from '../../../assets/images/thumbnail/buyTogether02.png'
import buyTogether03 from '../../../assets/images/thumbnail/buyTogether03.png'
import Button from '@mui/material/Button';
import '../../../styles/buy-together.css'

const BuyTogether = () => {
  return (
    <section className="buy-together-item">
        <div className="container">
          <div className="row">
            <h2 className="title">Buy Together</h2>
            <p className="subtitle">Take your build to the next level with expert recommended products</p>
          <div className="buy-together-main">
            <div className="buy-together-index col-lg-3 col-12 col-md-3">
              <img src={buyTogether01} className="opacity-3" alt="Buy Together Item" />
              <div className="sold-out">
                <p>Sold Out</p>
              </div>
              <div className="item-context">
              <h2>H9 Flow</h2>
              <p>Dual-Chamber Mid-Tower Airflow Case</p>
              <span>$159.99</span>
              </div>
            </div>
            <div className="buy-together-index col-lg-3 col-12 col-md-3">
              <img src={buyTogether02} className="opacity-3"  alt="Buy Together Item" />
               <div className="sold-out">
                <p>Sold Out</p>
              </div>
              <div className="item-context">
              <h2>Kraken X53</h2>
              <p>240mm Liquid Cooler</p>
              <span>$134.99</span>
              </div>
            </div>
            <div className="buy-together-index col-lg-3 col-12 col-md-3">
              <img src={buyTogether03} alt="Buy Together Item" />
              <div className="item-context">
              <h2>Internal USB Hub (Gen 3)</h2>
              <p>Internal USB 2.0 Expansion Hub</p>
              <span>$24.99</span>
              </div>
            </div>
            <div className="total-price col-lg-3 col-10 col-md-3">
              <div className="price-index">
                <p className="total">Total:</p>
                <p className="price">$24.99</p>
              </div>
                  <div className="addToCartBtn">
                    <Button variant="contained">Add To Cart</Button>
                  </div>
            </div>
          </div>
          </div>
        </div>
      </section>
  )
}

export default BuyTogether