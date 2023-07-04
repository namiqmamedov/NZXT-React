import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../pages/Product'
import ProductDetails from '../pages/ProductDetails'
import Cart from '../pages/Cart'
import Login from '../pages/Login'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element= { <Navigate to='/home'/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/product-detail' element={<ProductDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}

export default Routers