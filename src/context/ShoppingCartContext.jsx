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
            if (list[i].id === obj.id) {
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

    function deleteFromCart(productToRemoveId){
        setCartProducts(cartProducts => cartProducts.filter(product => product.id !== productToRemoveId))
    }

    function clearCart(){
        setCartProducts([])
        alert('Thank you for your Purchase! :)')
    }

    function updateCartProduct(productId, productQuantity){
        const productIndex = cartProducts.findIndex((product) => product.id == productId);

        if (productIndex === -1) return;

        const product = cartProducts[productIndex]
        const updatedProduct = {
            ...product,
            quantity: productQuantity,
        };

        const updatedCart = [...cartProducts];
        updatedCart[productIndex] = updatedProduct;

        setCartProducts(updatedCart);
    }

   return{
        addToCart,
        deleteFromCart,
        clearCart,
        updateCartProduct,
    }
}