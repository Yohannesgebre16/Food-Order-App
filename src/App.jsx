import ProductCard from "./Components/ProductCard.jsx";

function App() {
    return (
        <div 
            style={{
                margin: 0,
                fontFamily: 'Raleway', 
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                background: 'linear-gradient(#29251c, #2c2306)',
                color: '#d9e2f1',
                minHeight: '100vh'
            }}
        >
            <p className="text-green-700 text-center text-2xl py-8">
                Welcome to Deregebeya
            </p>

            <ProductCard />
        </div>
    );
}

export default App;