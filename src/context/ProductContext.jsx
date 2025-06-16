import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';

export const ProductContext = createContext();

const APIAdress = 'http://localhost:8000';

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [search, setSearch] = useState('');
    const [isLoadingProducts, setIsLoadingProducts] = useState(true);
    const [isLoadingCategories, setIsLoadingCategories] = useState(true);


    useEffect(() =>{
        const getData = async ()=>{
            try{
                setIsLoadingProducts(true);
                const responseProducts = await axios.get(`${APIAdress}/products`);
                setProducts(responseProducts.data);
                setIsLoadingProducts(false);
            } catch(error){
                console.log(error);
            }
        }
        getData();
    },[])

    useEffect(() =>{
        const getData = async ()=>{
            try{
                setIsLoadingCategories(true);
                const responseCategories = await axios.get(`${APIAdress}/categories`);
                setCategories(responseCategories.data);
                setIsLoadingCategories(false);
            } catch(error){
                console.log(error);
            }
        }
        getData();
    },[])

    return(
        <ProductContext.Provider value={{products, setProducts, categories, setCategories, isLoadingProducts, isLoadingCategories, search, setSearch}}>
            {children}
        </ProductContext.Provider>
    )
}

export function useProductContext(){
    const {products, setProducts, categories, setCategories} = useContext(ProductContext)
    
    function updateProductQuantity(productPurchased){
        const originalProduct = products.find((product) => product.id == productPurchased.id);
        const getData = async ()=>{
            try{
                await axios.put(`${APIAdress}/products/${productPurchased.id}`,{
                    "id": productPurchased.id,
                    "name": productPurchased.name,
                    "price": productPurchased.price,
                    "category": productPurchased.category,
                    "quantity": originalProduct.quantity - productPurchased.quantity,
                    "image": productPurchased.image,
                    "description": productPurchased.description
                })
                .then(() => {
                    setProducts(products.map(thisProduct => thisProduct.id === productPurchased.id ? productPurchased : thisProduct));
                })
            } catch(error){
                console.log(error);
            }
        }
        getData();
    }

    function addProduct(product){
        const getData = async ()=>{
            try{
                await axios.post(`${APIAdress}/products`,{
                    "id": product.id,
                    "name": product.name,
                    "price": product.price,
                    "category": product.category,
                    "quantity": product.quantity,
                    "image": product.image,
                    "description": product.description
                })
                .then((response) => {
                    setProducts([...products, response.data]);
                    alert("Product added successfully!");
                    window.location.reload();
                })
            } catch(error){
                console.log(error);
                alert("Failed to add product, try again later");
            }
        }
        getData();
    }

    function editProduct(product){
        const getData = async ()=>{
            try{
                await axios.put(`${APIAdress}/products/${product.id}`,{
                    "id": product.id,
                    "name": product.name,
                    "price": product.price,
                    "category": product.category,
                    "quantity": product.quantity,
                    "image": product.image,
                    "description": product.description
                })
                .then(() => {
                    setProducts(products.map(thisProduct => thisProduct.id === product.id ? product : thisProduct));
                    alert("Product edited successfully!");
                    window.location.reload();
                })
            } catch(error){
                console.log(error);
                alert("Failed to edit product, try again later");
            }
        }
        getData();
    }

    function deleteProduct(product){
        const getData = async ()=>{
            try{
                await axios.delete(`${APIAdress}/products/${product.id}`)
                .then(() => {
                    setProducts(products.filter((currentProduct) => currentProduct.id !== product.id));
                    alert("Product Removed successfully!");
                })
            } catch(error){
                console.log(error);
                alert("Failed to Remove product, try again later");
            }
        }
        getData();
    }

    function addCategory(category){
        const getData = async ()=>{
            try{
                await axios.post(`${APIAdress}/categories`,{
                    "id": category.id,
                    "name": category.name
                })
                .then((response) => {
                    setCategories([...categories, response.data]);
                    alert("Category added successfully!");
                    window.location.reload();
                })
            } catch(error){
                console.log(error);
                alert("Failed to add product, try again later");
            }
        }
        getData();
    }

    function editCategory(oldCategory, newCategory){
        const categoryProducts = products.filter((currentProduct) => currentProduct.category === oldCategory.name)
        const getData = async ()=>{
            try{
                for(let i = 0; i < categoryProducts.length; i++){
                    await axios.put(`${APIAdress}/products/${categoryProducts[i].id}`,{
                        "id": categoryProducts[i].id,
                        "name": categoryProducts[i].name,
                        "price": categoryProducts[i].price,
                        "category": newCategory.name,
                        "quantity": categoryProducts[i].quantity,
                        "image": categoryProducts[i].image,
                        "description": categoryProducts[i].description
                    })
                }
                setProducts(products.map((thisProduct) => {
                    if(thisProduct.category === oldCategory.name){
                        thisProduct.category = newCategory.name
                    }
                }));
                await axios.put(`${APIAdress}/categories/${oldCategory.id}`,{
                        "id": oldCategory.id,
                        "name": newCategory.name
                })
                .then(() => {
                    setCategories(categories.map(thisCategory => thisCategory.id === oldCategory.id ? newCategory : thisCategory));
                })
                alert("Category edited successfully!");
                window.location.reload();
            } catch(error){
                console.log(error);
                alert("Failed to edit category, try again later");
            }
        }
        getData();
    }

    function deleteCategory(category){
        const categoryProducts = products.filter((currentProduct) => currentProduct.category === category.name)
        const getData = async ()=>{
            try{
                for(let i = 0; i < categoryProducts.length; i++){
                    await axios.put(`${APIAdress}/products/${categoryProducts[i].id}`,{
                        "id": categoryProducts[i].id,
                        "name": categoryProducts[i].name,
                        "price": categoryProducts[i].price,
                        "category": "others",
                        "quantity": categoryProducts[i].quantity,
                        "image": categoryProducts[i].image,
                        "description": categoryProducts[i].description
                    })
                }
                setProducts(products.map((thisProduct) => {
                    if(thisProduct.category === category.name){
                        thisProduct.category = "others"
                    }
                }));
                await axios.delete(`${APIAdress}/categories/${category.id}`)
                .then(() => {
                    setCategories(categories.filter((currentCategory) => currentCategory.id !== category.id));
                    alert("Category Removed successfully!");
                    window.location.reload();
                })
            } catch(error){
                console.log(error);
                alert("Failed to Remove Category, try again later");
            }
        }
        getData();
    }


    return{
        updateProductQuantity,
        addProduct,
        editProduct,
        deleteProduct,
        addCategory,
        editCategory,
        deleteCategory,
    }
}