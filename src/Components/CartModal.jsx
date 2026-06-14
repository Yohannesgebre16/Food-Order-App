import { createPortal } from "react-dom";
import { useState } from "react";
import { useCart } from "../Contexts/CartContext.jsx";
export default function CartModal ({children , isClicked}) {
    if(!isClicked) return null;

    const {cartItems , addToCart , removeFromCart ,totalPrice} = useCart()
    return createPortal(
        <div className="p-10 fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="bg-white p-8 rounded-3xl shadow-2xl mx-4 overflow-hidden max-w-lg w-full">
                <span className="text-xl font-semibold">{children}</span>
                <div>
                    {cartItems.map((item)=>{
                        return(
                            <div key={item.id}>
                                <span className='text-center'>{item.quantity}</span>
                                <div className='flex justify-between'>
                                <button
                                className='p-1 text-md shadow-2xl'
                                onClick={()=> removeFromCart(item.id)}
                                >-</button>
                                <h4 className='text-lg font-semibold'>{item.name}</h4>
                                <button
                                className='p-1 text-md shadow-2xl'
                                onClick={()=> addToCart(item)}
                                >+</button>
                            </div>
                            </div>
                        )
                    })}
                </div>
 
            </div>

            

        </div>,
        document.getElementById("portal-root")
    )
}