import React, { useContext } from 'react'
import styles from './CategoryEditForm.module.css'
import CategoryForm from '../../components/CategoryForm/CategoryForm'
import { ProductContext } from '../../context/ProductContext';
import { useParams } from 'react-router-dom';

function CategoryEditForm() {
  const {categories} = useContext(ProductContext);
  let id = useParams().categoryId;

  let currentCategory = categories.find(category => category.id === id)

  return (
    <CategoryForm category={currentCategory}/>
  )
}
export default CategoryEditForm