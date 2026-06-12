import { createContex , useState , useContext } from "react";

const Cartcontexts = createContext()

export function CartProvider({children}) {
    const [count ,setCount] = useState(0)

    const increment = ()=>{
        setCount(prev => prev+1)
    }
    const decrement = ()=> {
        setCount(prev => prev-1)
    }
      
   return(
    <Cartcontext.Provider values={{count , increment ,decrement}}>
           {children}
    </Cartcontext.Provider>
   )
}

//Custom Hook 

export const useCart = ()=>{
    const context = useContext(Cartcontexts)
    if(!context){
        throw new Error("useCart must be used within CartProvider")
    }
    return context;
}