import React, { useContext, useState } from 'react'
import styles from "./CategoryForm.module.css"
import BackButton from '../BackButton/BackButton';
import { ProductContext } from '../../context/ProductContext';

function CategoryForm({category, isNewCategory = false}) {
  const { categories, isLoadingCategories } = useContext(ProductContext)

  const [name, setName] = useState('');

  let PageContent;

  const formEditCategory = (event) => {
    event.preventDefault()
    alert('Test')
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

  return (
    <>
      {PageContent}
    </>
  )
}

export default CategoryForm