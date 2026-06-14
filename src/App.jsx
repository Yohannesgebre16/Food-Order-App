import ProductList from "./Components/ProductList.jsx"
import Header from "./Components/Header.jsx"
import { CartProvider } from "./Contexts/CartContext.jsx";
function App() {
    return (  
        <CartProvider>     
            <Header/>
            <ProductList />
        </CartProvider>
    );
}

export default App;