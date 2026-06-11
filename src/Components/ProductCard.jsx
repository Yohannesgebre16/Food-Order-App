import { useEffect , useState } from "react"

export default function ProductCard () {
    const [product , setProduct] = useState([])
    
    // fecthing the data 

    useEffect(()=>{
        fetch("http://localhost:3000/meals")
        .then(res => res.json())
        .then(data => setProduct(data))
        .catch(err => console.error(err))
    },[])

    return( 
        <div>
           <ul>
            {product.map(item => <li key={item.id}>
                {item.name}
            </li>)}
           </ul>
        </div>
    )
}