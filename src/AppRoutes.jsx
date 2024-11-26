import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import AddItem from './pages/AddItem/AddItem'
import { ProductProvider } from './context/ProductContext'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Products from './pages/Products/Products'

function AppRoutes() {
  return (
    <BrowserRouter>
      <ProductProvider>
          <Routes>
              <Route index element={<Home/>}></Route>
              <Route path='/:productPage' element={<Products/>}></Route>
              <Route path='/:productPage/:productName' element={<ProductDetails/>}></Route>
              <Route path='/additem' element={<AddItem/>}></Route>
              <Route path='*' element={<NotFound/>}></Route>
          </Routes>
      </ProductProvider>
    </BrowserRouter>
  )
}

export default AppRoutes