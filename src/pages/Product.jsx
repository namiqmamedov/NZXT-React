import React from 'react'
import high from '../assets/videos/high.mp4'
import '../styles/product.css'

const Product = () => {
  return (
      <>
        <section className='product'>
        <div className="thumbnail-content">
            <div className="thumbnail-text">
              <h1>H9 Series</h1>
              <p>Dual Chamber Mid-Tower Cases</p>
            </div>
          </div>
          <video src={high} autoPlay loop muted></video>
        </section>
      </>
    )
}

export default Product