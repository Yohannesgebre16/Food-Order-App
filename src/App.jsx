import { useState } from "react";
import ProductList from "./Components/ProductList.jsx"
import Header from "./Components/Header.jsx"
import { CartProvider } from "./Contexts/CartContext.jsx";
import CartModal from './Components/CartModal.jsx'
function App() {
    const [isCartOpen , setIsCartOpen] = useState(false)
    return (  
        <CartProvider>     
            <Header onOpenCart={()=> setIsCartOpen(true)}/>
            <ProductList />
            <CartModal 
            isClicked={isCartOpen}
            onClose={()=> setIsCartOpen(false)}
            >
                Your Cart
            </CartModal>
        </CartProvider>
    );
}

export default App;