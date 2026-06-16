import { useState } from "react";
import ProductList from "./Components/ProductList.jsx"
import Header from "./Components/Header.jsx"
import { CartProvider } from "./Contexts/CartContext.jsx";
import CartModal from './Components/CartModal.jsx'
import FormModal from "./Components/FormModal.jsx";
function App() {
    const [isCartOpen , setIsCartOpen] = useState(false)
    const [isFormOpen , setIsFormOpen] = useState(false)
    // handle chekout form 

    const handleGotoCheckout = ()=>{
        setIsCartOpen(false)
        setIsFormOpen(true)
    }
    return (  
        <CartProvider>     
            <Header onOpenCart={()=> setIsCartOpen(true)}/>
            <ProductList />
            <CartModal 
            isClicked={isCartOpen}
            onClose={()=> setIsCartOpen(false)}
            onCheckout={handleGotoCheckout}
            >
                Your Cart
            </CartModal>
            <FormModal
            isOpen={isFormOpen}
            onClose={()=> setIsFormOpen(false)}
            />

        
        </CartProvider>
    );
}

export default App;