import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ProductProvider } from './context/ProductContext'
import SoundButton from './components/SoundButton/SoundButton'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import AnimatedRoutes from './AnimatedRoutes'

function AppRoutes() {

  return (
    <BrowserRouter>
      <ProductProvider>
        <ShoppingCartProvider>
          <SoundButton music={'/sounds/shopmusic.mp3'}/>
          <AnimatedRoutes/>
        </ShoppingCartProvider>
      </ProductProvider>
    </BrowserRouter>
  )
}

export default AppRoutes