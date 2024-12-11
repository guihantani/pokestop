import { createContext, useContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext();


export const ShoppingCartProvider = ({children}) => {
    const cartLocalStorage = JSON.parse(localStorage.getItem("cartProducts") || "[]")
    const [cartProducts, setCartProducts] = useState(cartLocalStorage);

    useEffect(() => {
        localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
    , [cartProducts]})

    return(
        <ShoppingCartContext.Provider value={{cartProducts, setCartProducts}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export function useShoppingCartContext(){
    const {cartProducts, setCartProducts} = useContext(ShoppingCartContext)

    function containsObject(obj, list){
        var i;
        for (i = 0; i < list.length; i++) {
            if (list[i].name === obj.name) {
                return true;
            }
        }
        return false;
    }

    function addToCart(product, quantity){
        if(containsObject(product, cartProducts)){
            alert('Product Already in the Cart')
        }
        else{
            product.quantity = quantity;
            setCartProducts(cartProducts => ([...cartProducts, product]))
        }
    }

    function deleteFromCart(productToRemoveName){
        setCartProducts(cartProducts => cartProducts.filter(product => product.name !== productToRemoveName))
    }

    function clearCart(){
        setCartProducts([])
        alert('Thank you for your Purchase! :)')
    }

   return{
        addToCart,
        deleteFromCart,
        clearCart,
    }
}