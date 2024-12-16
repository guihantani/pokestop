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
    const {products, setProducts} = useContext(ProductContext)
    
    function updateProductQuantity(productPurchased){
        const originalProduct = products.find((product) => product.name == productPurchased.name);
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
                    setProducts(products.map(thisProduct => thisProduct.name === productPurchased.name ? productPurchased : thisProduct));
                })
            } catch(error){
                console.log(error);
            }
        }
        getData();
    }

    return{
        updateProductQuantity,
    }
}