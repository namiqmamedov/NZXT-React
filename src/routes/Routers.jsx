import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../pages/Product'
import ProductDetails from '../pages/ProductDetails'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element= { <Navigate to='/home'/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        {/* <Route path='/product/:id' element={<ProductDetails/>}/> */}
        <Route path='/product-detail' element={<ProductDetails/>}/>
    </Routes>
  )
}

export default Routers