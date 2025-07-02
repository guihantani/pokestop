import React from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import ProductsDashboard from './pages/ProductsDashboard/ProductsDashboard'
import CategoriesDashboard from './pages/CategoriesDashboard/CategoriesDashboard'
import AddProductForm from './pages/AddProductForm/AddProductForm'
import ProductEditForm from './pages/ProductEditForm/ProductEditForm'
import CategoryEditForm from './pages/CategoryEditForm/CategoryEditForm'
import AddCategoryForm from './pages/AddCategoryForm/AddCategoryForm'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Products from './pages/Products/Products'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'

import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route index element={<Home/>}></Route>
                <Route path='/:productPage' element={<Products/>}></Route>
                <Route path='/:productPage/:productId' element={<ProductDetails/>}></Route>
                <Route path='/productsDashboard' element={<ProductsDashboard/>}></Route>
                <Route path='/productsDashboard/productEditForm/:productId' element={<ProductEditForm/>}></Route>
                <Route path='/productsDashboard/addProductForm' element={<AddProductForm/>}></Route>
                <Route path='/categoriesDashboard' element={<CategoriesDashboard/>}></Route>
                <Route path='/categoriesDashboard/categoryEditForm/:categoryId' element={<CategoryEditForm/>}></Route>
                <Route path='/categoriesDashboard/addCategoryForm' element={<AddCategoryForm/>}></Route>
                <Route path='/notfound' element={<NotFound/>}></Route>
                <Route path='*' element={<Navigate to="/notfound" replace />}></Route>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes