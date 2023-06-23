import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../pages/Product'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element= { <Navigate to='/home'/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
    </Routes>
  )
}

export default Routers