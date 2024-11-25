import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost:8000/products')
            .then(response => {
                setProducts(response.data)
            })
    },[])

    return(
        <ProductContext.Provider value={{products, setProducts}}>
            {children}
        </ProductContext.Provider>
    )
}

export function useProductContext(){

    return{

    }
}