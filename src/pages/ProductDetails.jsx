import React from "react";
import "../styles/product-detail.css";
import { Link } from "react-router-dom";
import product01 from "../assets/images/product/h9-01.png";
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


const ProductDetails = () => {
  return (
    <>
      <div className="breadcrumb-item">
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
      <div className="product-item">
        <div className="container">
          <div className="row">
            <div className="product-index">
              <div className="product-thumbnail col-lg-6">
                <img src={product01} alt="Product Image" />
              </div>
              <div className="product__content col-lg-6">
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
                <Form.Select >
                    <option value="1">H9 Flow</option>
                    <option value="2">H9 Elite</option>
                </Form.Select>
                <div className="product-mini-item">
                    <div className="item-index">
                        <img src={miniProduct01} alt="Mini Product" />
                        <div className="item-content">
                        <p className="item-title">N7 Z690</p>
                        <div className="color-index">
                            <p className="color-wrapper">Color:</p>
                            <p>Matte White</p>
                        </div>
                        </div>

                    </div>
                    <div className="item-index">
                        <img src={miniProduct02} alt="Mini Product" />
                        <div className="item-content">
                        <p className="item-title">F120 RGB Triple Pack</p>
                        <div className="color-index">
                            <p className="color-wrapper">Color:</p>
                            <p>Matte Black</p>
                        </div>
                        </div>
                    </div>
                    <div className="item-index">
                        <img src={miniProduct03} alt="Mini Product" />
                        <div className="item-content">
                        <p className="item-title">C750 Gold</p>
                        <div className="color-index">
                            <p className="color-wrapper">Color:</p>
                            <p>Matte Black</p>
                        </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;