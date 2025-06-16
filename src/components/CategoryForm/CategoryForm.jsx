import React, { useContext, useState } from 'react'
import styles from "./CategoryForm.module.css"
import BackButton from '../BackButton/BackButton';
import { ProductContext, useProductContext } from '../../context/ProductContext';
import { v4 as uuid } from 'uuid'

function CategoryForm({category, isNewCategory = false}) {
  const { categories, isLoadingCategories } = useContext(ProductContext)
  const { addCategory, editCategory } = useProductContext()

  const [name, setName] = useState('');

  let PageContent;

  const formEditCategory = (event) => {
    event.preventDefault()
    if(name === ''){
      alert('Category needs to be changed to confirm changes!');
    }
    else{
      const newCategory = {
        "id": category.id,
        "name": name
      }
      editCategory(category, newCategory);
      window.history.back();
    }
  }

  const formAddCategory = (event) => {
    event.preventDefault()
    const newCategory = {
        "id": uuid(),
        "name": name
    }
    addCategory(newCategory);
    window.history.back();
  }


  if (isLoadingCategories) {
    PageContent = <h1>Loading...</h1>
  }
  else if (!isNewCategory) {
    PageContent = (
      <>
        <BackButton />
        <section className={styles.categoryForm}>
          <form id='category-form' onSubmit={formEditCategory} className={styles.form}>
            <div className={styles.input}>
              <label htmlFor='name'>Name</label>
              <input required type='text' id='name' name='name' placeholder='Name' defaultValue={category.name} onChange={((event) => {
                setName(event.target.value)
              })} />
            </div>
            <div className={styles.input}>
              <input type="submit" value="Confirm Changes" />
            </div>
          </form>
        </section>
      </>
    )
  }
  else if (isNewCategory) {
    PageContent = (
      <>
        <BackButton />
        <section className={styles.categoryForm}>
          <form id='category-form' onSubmit={formAddCategory} className={styles.form}>
            <div className={styles.input}>
              <label htmlFor='name'>Name</label>
              <input required type='text' id='name' name='name' placeholder='Name' onChange={((event) => {
                setName(event.target.value)
              })} />
            </div>
            <div className={styles.input}>
              <input type="submit" value="Confirm Changes" />
            </div>
          </form>
        </section>
      </>
    )
  }

  return (
    <>
      {PageContent}
    </>
  )
}

export default CategoryForm