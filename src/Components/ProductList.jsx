import { useState , useEffect } from "react"
import ProductCard from "./ProductCard.jsx"
export default function ProductList () {

    const [food , setFood] = useState([])
    const [error , setError] = useState(null)
    
    //Fetching data 
    useEffect(()=>{
        fetch("http://localhost:3000/meals")
        .then((res)=> res.json())
        .then((data)=> setFood(data))
        .catch((err)=> console.error(err))
    },[])

    return(
        <div className="bg-gray-50 min-h-screen w-full py-12 px-4 sm:px-8 lg:px-16">
        <div className='max-w-[90rem] mx-auto w-full'>
            <h2
            className="text-3xl md:text-4xl font-black text-gray-500 mb-12 text-center tracking-tight"
            >Our Delicious Menu</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full">
                {food.map((item)=>(
                    <ProductCard item={item} key={item.id} />
                ))}
            </div>
        </div>
        </div>
    )
}