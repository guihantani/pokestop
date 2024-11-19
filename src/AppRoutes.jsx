import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import AddItem from './pages/AddItem/AddItem'

function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}></Route>
            <Route path='/additem' element={<AddItem/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes