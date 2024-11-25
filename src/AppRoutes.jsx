import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import AddItem from './pages/AddItem/AddItem'
import Pokemons from './pages/Pokemons/Pokemons'
import Items from './pages/Items/Items'
import { ProductProvider } from './context/ProductContext'

function AppRoutes() {
  return (
    <BrowserRouter>
      <ProductProvider>
          <Routes>
              <Route index element={<Home/>}></Route>
              <Route path='/pokemons' element={<Pokemons/>}></Route>
              <Route path='/items' element={<Items/>}></Route>
              <Route path='/additem' element={<AddItem/>}></Route>
              <Route path='*' element={<NotFound/>}></Route>
          </Routes>
      </ProductProvider>
    </BrowserRouter>
  )
}

export default AppRoutes