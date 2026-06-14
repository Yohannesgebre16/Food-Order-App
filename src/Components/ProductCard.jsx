import CartModal from "./CartModal.jsx"
import {useState} from "react"
import { useCart } from "../Contexts/CartContext.jsx"
export default function ProductCard({item}) {
    const [isclick , setIsClick] = useState(false)
    const {addToCart} = useCart()
    return(
        <div className="bg-white rounded-3xl shadow-md">

            <div className='relative-aspects-[4/3] w-full bg-gray-100 overflow-hidden'>
                <img
                className="w-full h-full object-cover hover:scale-105 transition -transform duration-500 ease-in-out"
                 src={`http://localhost:3000/${item.image}`}
                  alt={item.name}
                  />
            </div>

            <div className=''>
                <h4 className='text-md text-center shadow-3xl font-semibold '>{item.name}</h4>
                <span className='text-yellow-500 font-semibold text-sm'>
                     {item.price}
                </span>
                
                <p 
                className='text-gray-400 text-xs line-clamp-2 mb-5 leading-relaxed  '
                >{item.description}</p>

                <button
                className='w-full mt-auto py-2.5 px-5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-semibold'
                onClick={()=> {
                    setIsClick(true)
                    addToCart(item)
                }}

                >Add to cart</button>
            </div>

            <CartModal
            isClicked={isclick}
            >
            <h5>Your Cart</h5>
                
            </CartModal>           

        </div>
    )
}