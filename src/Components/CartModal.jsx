import { createPortal } from "react-dom";
import { useState } from "react";
export default function CartModal ({children , isClicked}) {
    const [count , setCount] = useState(0)
    if(!isClicked) return null;
    return createPortal(
        <div className="p-10 fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <form className="bg-white p-8 rounded-3xl shadow-2xl mx-4 overflow-hidden max-w-lg w-full" action="">
                <span className="text-xl font-semibold">{children}</span>
            
 
            </form>

            

        </div>,
        document.getElementById("portal-root")
    )
}