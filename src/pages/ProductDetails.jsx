import React from "react";
import "../styles/product-detail.css";
import { Link, useParams } from "react-router-dom";
import {AiFillStar} from 'react-icons/ai'
import {BsStarHalf} from 'react-icons/bs'
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Form from 'react-bootstrap/Form';
import miniProduct01 from '../assets/images/product/miniProduct01.png'
import miniProduct02 from '../assets/images/product/miniProduct02.png'
import miniProduct03 from '../assets/images/product/miniProduct03.png'
import { Checkbox } from "@nextui-org/react";
import Button from '@mui/material/Button';
import nzxtSupport from '../assets/images/thumbnail/nzxtSupport.png'
import BuyTogether from "../components/UI/BuyTogether/BuyTogether";
import ProductTab from "../components/UI/ProductTab/ProductTab";
import ImageSlider from "../components/UI/ImageSlider/ImageSlider";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";
import products from "../data/products";

const ProductDetails = () => {

  const {id} = useParams();
  const dispatch = useDispatch();
  const product = products.find(product => product.id === id)
  const {title, price, image} = product
 

  const addItem = () =>{
    dispatch(cartActions.addItem({
      id,
      title,
      price,
      image
  }))
  }

  return (
    <>
      <section className="breadcrumb-item col-lg-12">
        <div className="breadcrumb-main">
          <div className="breadcrumb-index">
          <Link>H9 Series</Link>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="1em"
            height="1em"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <p>H9 Flow</p>
        </div>
        </div>
      </section>
      <section className="product-item">
        <div className="container">
          <div className="row">
            <div className="product-index">
              <div className="product-thumbnail col-lg-6 col-12">
                  <div className="slider-item">
                      <ImageSlider/>
                    </div>
              </div>
              <div className="product__content col-lg-6 col-12">
                <h1 className="title">H9 Flow</h1>
                <div className="feedback-index">
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <BsStarHalf/>
                </div>
                <p className="description">
                Dual-Chamber Mid-Tower Airflow Case
                </p>
                <div>
                    <span className="price">
                        $159.99
                    </span>
                </div>
                <div className="promo-text">
                    <span>
                        As low as $15/mo with 
                    </span>
                </div>
                <div className="configure-item">
                    <hr/>
                    <span>
                        Configure
                    </span>
                    <hr/>
                </div>
                <div className="color-options">
                      <FormControl>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="1"
                          name="radio-buttons-group"
                        >
                          <FormControlLabel
                            className="color-radio"
                            value="1"
                            control={<Radio />}
                          />
                          <FormControlLabel
                            className="color-radio"
                            value="2"
                            control={<Radio />}
                          />
                        </RadioGroup>
                      </FormControl>
                </div>
                <div className="seria-list">
                    <p>Series:</p>
                    <Link>
                    H9</Link>
                </div>
                <Form.Select>
                    <option value="1">H9 Flow</option>
                    <option value="2">H9 Elite</option>
                </Form.Select>
                <div className="product-mini-item">
                    <div className="item-index">
                    <Checkbox className="checkbox-index" color="secondary">
                    </Checkbox>
                        <img src={miniProduct01} alt="Mini Product" />
                        <div className="item-content">
                        <p className="item-title">N7 Z690</p>
                        <div className="color-index">
                            <p className="color-wrapper">Color:</p>
                            <p>Matte White</p>
                        </div>
                        </div>
                        <div className="item-price">
                          +
                          <span>
                            $299.99
                          </span>
                        </div>
                    </div>
                    <div className="item-index">
                    <Checkbox className="checkbox-index" color="secondary">
                    </Checkbox>
                        <img src={miniProduct02} alt="Mini Product" />
                        <div className="item-content">
                        <p className="item-title">F120 RGB Triple Pack</p>
                        <div className="color-index">
                            <p className="color-wrapper">Color:</p>
                            <p>Matte Black</p>
                        </div>
                        </div>
                        <div className="item-price">
                          +
                          <span>
                            $89.99
                          </span>
                        </div>
                    </div>
                    <div className="item-index">
                    <Checkbox className="checkbox-index" color="secondary">
                    </Checkbox>
                        <img src={miniProduct03} alt="Mini Product" />
                        <div className="item-content">
                        <p className="item-title">C750 Gold</p>
                        <div className="color-index">
                            <p className="color-wrapper">Color:</p>
                            <p>Matte Black</p>
                        </div>
                        </div>
                        <div className="item-price">
                          +
                          <span>
                            $139.99
                          </span>
                        </div>
                    </div>
                </div>
                <div className="buy-item">
                    <hr/>
                    <span>
                      Buy
                    </span>
                    <hr/>
                </div>
                {/* <div className="notify-btn">
                  <p className="notified-text">Get notified when this item is available.</p>
                  <Button variant="contained">Notify Me</Button>
                </div> */}
                 <div className="buy-btn">
                  <Button onClick={addItem} variant="contained">Add to Cart</Button>
                </div>
                <hr/>
                <div className="order-text">
                  <p>Return Policy: 
                  <Link>
                   NZXT Return Policy
                  </Link>
                  </p>
                </div>
                <div className="order-text">
                  <p>Warranty  Policy: 
                  <Link>
                  NZXT Warranty
                  </Link>
                  </p>
                </div>
                <div className="support-module">
                  <div className="support-content col-lg-6">
                    <h2>Have questions?</h2>
                    <p>Our experts are ready to help.</p>
                    <Button variant="outlined">Chat Now</Button>
                  </div>
                  <div className="support-img col-lg-6">
                    <img src={nzxtSupport} alt="Support Image" />
                  </div>
                </div>
              </div>
              </div>
          </div>
        </div>
      </section>
      <BuyTogether/>
      <ProductTab/>
    </>
  );
};

export default ProductDetails;
