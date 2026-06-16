import {createContext , useContext , useState } from 'react'

const CartContext = createContext()

export function CartProvider({children}) {
    const [cartItems , setCartItems] = useState([])

    //addtocart

    const addToCart = (newItem) => {
    setCartItems((prevItems) => {
    const existingItem = prevItems.find((item) => item.id === newItem.id);

    if (existingItem) {
      return prevItems.map((item) =>
        item.id === newItem.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    return [...prevItems, { ...newItem, quantity: 1 }];
  });
};


    // removetocart 

    const removeFromCart = (itemId)=> {
        setCartItems((prevItems)=>{
            const existingItem = prevItems.find((cartItem)=> cartItem.id === itemId)

            if(existingItem.quantity === 1){
                return prevItems.filter((cartItem)=> cartItem.id !== itemId)
            }
            return prevItems.map((cartItem)=>
            cartItem.id === itemId
            ?{...cartItem , quantity: cartItem.quantity -1}
            :cartItem
            )
        })
    }

    // calculate total price dynamically 

    const totalPrice = cartItems.reduce(
        (total , item)=> total + item.price * item.quantity,
        0
    )

    // clear cart logic 

    const clearCart = ()=>{
        setCartItems([])
    }
    return(
        <CartContext.Provider value={{cartItems , clearCart, addToCart , removeFromCart , totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}

//Custom hook 

export const useCart = ()=>{
    const context = useContext(CartContext)
    if(!context) {
        throw new Error("useCart must be used within CartProvider")
    }
    return context;
}