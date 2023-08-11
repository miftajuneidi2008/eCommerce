import React from 'react'
import Navbar from './component/Navbar'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import Home from './component/Home'
import Product from './component/Product'
import About from './component/About'
import Contact from './component/Contact'
import ProductDetails from './component/ProductDetails'
import { useSelector } from 'react-redux'
import Cart from './component/Cart'

function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Product />} />
      <Route path='/products/:id' element={<ProductDetails />} /> 
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/cart' element={<Cart />} />
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
