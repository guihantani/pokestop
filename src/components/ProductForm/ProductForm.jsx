import React, { useContext, useState } from 'react'
import styles from './ProductForm.module.css'
import { ProductContext, useProductContext } from '../../context/ProductContext';
import { NavLink } from 'react-router-dom';
import BackButton from '../BackButton/BackButton';
import { v4 as uuid } from 'uuid'

function ProductForm({ product, newProduct = false }) {
    const {categories, isLoadingProducts, isLoadingCategories} = useContext(ProductContext)
    const {addProduct, editProduct} = useProductContext();

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');

    let PageContent;

    const formEditProduct = (event) => {
        event.preventDefault()
        const newProduct = {
            "id": product.id,
            "name": (name === '' ? product.name : name),
            "price": (price === '' ? product.price : price),
            "category": (category === '' ? product.category : category),
            "quantity": (quantity === '' ? product.quantity : parseInt(quantity)),
            "image": (image === '' ? product.image : image),
            "description": (description === '' ? product.description : description)
        }
        if(name === '' && price === '' && category === '' && quantity === '' && image === '' && description === ''){
            alert("Product needs to be edited to confirm changes!");
        }
        else{
            editProduct(newProduct)
            window.history.back();
        }
    }

    const formAddProduct = (event) => {
        event.preventDefault()
        const newProduct = {
            "id": uuid(),
            "name": name,
            "price": price,
            "category": category,
            "quantity": quantity,
            "image": image,
            "description": description
        }

        addProduct(newProduct);
        window.history.back();
    }
    
    if(isLoadingCategories || isLoadingProducts){
        PageContent = <h1>Loading...</h1>
    }
    else if(!newProduct){
        PageContent = (
            <>
                <BackButton/>
                <section className={styles.productForm}>
                    <img src={product.image}/>
                    <form id='product-form' onSubmit={formEditProduct} className={styles.form}>
                        <div className={styles.input}>
                            <label htmlFor='name'>Name</label>
                            <input required type='text' id='name' name='name' placeholder='Name' defaultValue={product.name} onChange={((event) => {
                                setName(event.target.value)
                            })}/>
                        </div>
                        <div className={styles.input}>
                            <label htmlFor='price'>Price</label>
                            <input required type='number' id='price' name='price' placeholder='R$' min={0} defaultValue={parseFloat(product.price).toFixed(2)} onChange={((event) => {
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
                            <input required type='number' id='quantity' name='quantity' placeholder='0' min={0} defaultValue={product.quantity} onChange={((event) => {
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
                        <div className={styles.input}>
                            <input type="submit" value="Confirm Changes"/>
                        </div>
                    </form>
                </section>
            </>
        )
    }
    else{
        PageContent = (
            <>
                <BackButton/>
                <section className={styles.productForm}>
                    <form id='product-form' onSubmit={formAddProduct} className={styles.form}>
                        <div className={styles.input}>
                            <label htmlFor='name'>Name</label>
                            <input required type='text' id='name' name='name' placeholder='Name' onChange={((event) => {
                                setName(event.target.value)
                            })}/>
                        </div>
                        <div className={styles.input}>
                            <label htmlFor='price'>Price</label>
                            <input required type='number' id='price' name='price' placeholder='R$' min={0} onChange={((event) => {
                                setPrice(String((parseFloat(event.target.value).toFixed(2))))
                            })}/>
                        </div>
                        <div className={styles.input}>
                            <label htmlFor='category'>Category</label>
                            <select required id='category' name='category' onChange={((event) => {
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
                            <input required type='number' id='quantity' name='quantity' placeholder='0' min={0} onChange={((event) => {
                                setQuantity(event.target.value)
                            })}/>
                        </div>
                        <div className={styles.input}>
                            <label htmlFor='image'>Image URL</label>
                            <input required type='text' id='image' name='image' placeholder='Image URL' onChange={((event) => {
                                setImage(event.target.value)
                            })}/>
                        </div>
                        <div className={styles.input}>
                            <label htmlFor='description'>Description</label>
                            <textarea required type='text' rows='10' id='description' name='description' placeholder='Description' onChange={((event) => {
                                setDescription(event.target.value)
                            })}/>
                        </div>
                        <div className={styles.input}>
                            <input type="submit" value="Add Product"/>
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

export default ProductForm