import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';

export const ProductContext = createContext();

const APIAdress = 'http://localhost:8000/products';

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        const getData = async ()=>{
            try{
                const response = await axios.get(APIAdress);
                setProducts(response.data);
            } catch(error){
                console.log(error);
            }
        }
        getData();
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