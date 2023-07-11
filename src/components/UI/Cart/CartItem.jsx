import React from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../../store/shopping-cart/cartSlice';
import { BiTrash } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const CartItem = ({item}) => {

    const {id,title,price,image,quantity,totalPrice} = item

    const dispatch = useDispatch();

    const incrementItem = () => {
        dispatch(cartActions.addItem({
            id,
            title,
            price,
            image
        }))
    }

    const decreaseItem = () => {
        dispatch(cartActions.removeItem(id))
    }

    const deleteItem = () => {
        dispatch(cartActions.deleteItem(id))
    }
    
  return (
    <li className="cart-item">
    <div className="cart-image">
      <img src={image} alt="Cart Image" />
    </div>
    <div className="cart-content">
      <span className="title">
        {title}
      </span>
      <BiTrash className="remove-item" onClick={deleteItem} />
      <div className="quantity-price">
        {/* <button className="quantity-btn">
            <AiOutlinePlus/>
            <input type="number"  value={1}/>
            <AiOutlineMinus/>
        </button> */}
        <div className="d-flex align-items-center justify-content-between gap-3 increase__decrease-btn">
          <span className="increase__btn" onClick={incrementItem}>
            <AiOutlinePlus />
          </span>
          <span className="quantity">{quantity}</span>
          <span className="decrease__btn" onClick={decreaseItem}>
            <AiOutlineMinus />
          </span>
        </div>
        <span>${totalPrice}</span>
      </div>
    </div>
  </li>
  )
}

export default CartItem