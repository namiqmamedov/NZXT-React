import React from 'react'
import '../styles/cart.css'
import Button from '@mui/material/Button';
import img01 from  '../assets/images/thumbnail/prebuilts-primary-web.avif'
import img02 from '../assets/images/thumbnail/bld-primary-web.avif'
import img03 from '../assets/images/thumbnail/offers-primary-web.avif'

const Cart = () => {
  return (
    <div className='cart-index'>
        <div className="container">
            <div className="row">
                <div className="cart-base">
                    <h3>Your cart is empty</h3>
                    <p>Need Inspiration? Check out our recommended items to begin building the extraordinary!</p>
                    <Button variant="contained" className='continue-shopping'>Continue Shopping</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart