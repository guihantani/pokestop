import { createContext, useContext, useState } from "react";

export const ShoppingCartContext = createContext();


export const ShoppingCartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([]);

    return(
        <ShoppingCartContext.Provider value={{cartProducts, setCartProducts}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export function useShoppingCartContext(){
    const {cartProducts, setCartProducts} = useContext(ShoppingCartContext)

    function addToCart(product, quantity){
        product.quantity = quantity;
        setCartProducts(cartProducts => ([...cartProducts, product]))
    }

   return{
        addToCart,
    }
}