import React from 'react'
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import {Link} from 'react-router-dom'

const ProductCard = (props) => {
  const {id,title,subtitle,image,price,oldPrice,count} = props.item
  return (
    <div className="shop-card">
                <div className="card-thumbnail">
                  {count <= 15 && count > 1 ? (
                    <span className="badge-stock">
                    <p>Low Stock</p>
                    </span>
                  ) : ""}
                   {count  == 0 ? <span className="badge-sold">
                  <p>Sold Out</p>
                    </span> : ""
                  }
                  {oldPrice > price && count > 15 ? (
                        <span className="badge-main">
                        <p>$100 Off</p></span>
                    ) : ""  
                   }   
                  <Link to={`/product/${id}`}>
                  <img src={image} alt="Shop Card" />
                  </Link>
                  <div className="quick-shop">
                    <p>Quick Shop</p>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-subtitle">{subtitle}</p>
                  <div className="card-bottom">
                  <div className="price-index">
                    {oldPrice ? <p className="old-price">${oldPrice}</p> : ""}
                    <p className="card-price">${price}</p>
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
                  </div>
                </div>
    </div>
  )
}

export default ProductCard