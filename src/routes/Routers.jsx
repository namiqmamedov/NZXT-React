import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../pages/Product'
import ProductDetails from '../pages/ProductDetails'
import Cart from '../pages/Cart'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Support from '../pages/Support'
import Profile from '../pages/Account/Profile'
import SavedBuild from '../pages/Account/SavedBuild'
import OrderHistory from '../pages/Account/OrderHistory'
import SupportReturn from '../pages/Account/SupportReturn'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element= { <Navigate to='/home'/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/product-detail' element={<ProductDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/support' element={<Support/>}/>
        <Route path='/account/profile' element={<Profile/>}/>
        <Route path='/account/saved-bld' element={<SavedBuild/>}/>
        <Route path='/account/order-history' element={<OrderHistory/>}/>
        <Route path='/account/support' element={<SupportReturn/>}/>
    </Routes>
  )
}

export default Routers