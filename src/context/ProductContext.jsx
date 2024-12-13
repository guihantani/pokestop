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

    return{

    }
}