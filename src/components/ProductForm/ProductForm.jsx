import React, { useContext, useState } from 'react'
import styles from './ProductForm.module.css'
import { ProductContext } from '../../context/ProductContext';

function ProductForm({ product, newProduct = false }) {
    const {categories, isLoadingProducts, isLoadingCategories} = useContext(ProductContext)

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');

    let PageContent;
    console.log(categories)

    const submitForm = (event) => {
        event.preventDefault()
        alert('Form Submited')
    }
    
    if(isLoadingCategories || isLoadingProducts){
        PageContent = <h1>Loading...</h1>
    }
    else if(!newProduct){
        PageContent = (
            <section className={styles.productForm}>
                <img src={product.image}/>
                <form id='product-form' onSubmit={submitForm} className={styles.form}>
                    <div className={styles.input}>
                        <label htmlFor='name'>Name</label>
                        <input required type='text' id='name' name='name' placeholder='Name' defaultValue={product.name} onChange={((event) => {
                            setName(event.target.value)
                        })}/>
                    </div>
                    <div className={styles.input}>
                        <label htmlFor='price'>Price</label>
                        <input required type='number' id='price' name='price' placeholder='R$' defaultValue={parseFloat(product.price).toFixed(2)} onChange={((event) => {
                            setPrice(String((parseFloat(event.target.value).toFixed(2))))
                        })}/>
                    </div>
                    <div className={styles.input}>
                        <label htmlFor='category'>Category</label>
                        <select required id='category' name='category' defaultValue={product.category} onChange={((event) => {
                            setCategory(event.target.value)
                        })}>
                            <option value='' hidden>Select a Category</option>
                            {categories.map((category) => {
                                return(<option key={category.id} value={category.name}>{category.name}</option>)
                            })}
                        </select>
                    </div>
                    <div className={styles.input}>
                        <label htmlFor='quantity'>Quantity</label>
                        <input required type='number' id='quantity' name='quantity' placeholder='0' defaultValue={product.quantity} onChange={((event) => {
                            setQuantity(event.target.value)
                        })}/>
                    </div>
                    <div className={styles.input}>
                        <label htmlFor='image'>Image URL</label>
                        <input required type='text' id='image' name='image' placeholder='Image URL' defaultValue={product.image} onChange={((event) => {
                            setImage(event.target.value)
                        })}/>
                    </div>
                    <div className={styles.input}>
                        <label htmlFor='description'>Description</label>
                        <textarea required type='text' rows='10' id='description' name='description' placeholder='Description' defaultValue={product.description} onChange={((event) => {
                            setDescription(event.target.value)
                        })}/>
                    </div>
                </form>
            </section>
        )
    }
    else{
        PageContent = (
            <h1>New Product</h1>
        )
    }

    return (
        <>
            {PageContent}
        </>
    )
}

export default ProductForm