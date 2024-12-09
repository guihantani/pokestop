import React from 'react'
import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import AddItem from './pages/AddItem/AddItem'
import { ProductProvider } from './context/ProductContext'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Products from './pages/Products/Products'
import SoundButton from './components/SoundButton/SoundButton'
import { ShoppingCartProvider } from './context/ShoppingCartContext'

function AppRoutes() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <ShoppingCartProvider>
          <SoundButton music={'/sounds/shopmusic.mp3'}/>
          <Routes>
              <Route index element={<Home/>}></Route>
              <Route path='/:productPage' element={<Products/>}></Route>
              <Route path='/:productPage/:productName' element={<ProductDetails/>}></Route>
              <Route path='/additem' element={<AddItem/>}></Route>
              <Route path='/notfound' element={<NotFound/>}></Route>
              <Route path='*' element={<Navigate to="/notfound" replace />}></Route>
          </Routes>
        </ShoppingCartProvider>
      </ProductProvider>
    </BrowserRouter>
  )
}

export default AppRoutes