import logoImg from '../assets/logo.jpg';
import { useCart } from "../Contexts/CartContext.jsx";

export default function Header({ onOpenCart }) {
  const { cartItems } = useCart();

  // Calculate total number of items inside the cart
  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm w-full transition-all">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-8 lg:px-16 h-20 flex items-center justify-between">
        
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-500 shadow-sm transition-transform group-hover:scale-105 duration-300">
            <img 
              src={logoImg} 
              alt="A restaurant Food orderApp" 
              className="w-full h-full object-cover" 
            />
          </div>
          <h1 className="text-xl md:text-2xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent tracking-tight">
            Food<span className="text-amber-500">Order</span>
          </h1>
        </div>

        <nav className="flex items-center gap-4">
          <button 
            onClick={onOpenCart}
            className="relative flex items-center gap-2 bg-amber-50 hover:bg-amber-100 text-amber-700 font-bold py-2.5 px-5 rounded-full transition-all duration-200 group active:scale-95 text-sm md:text-base border border-amber-200/50"
          >
            <span className="text-lg transition-transform group-hover:-translate-y-0.5">🛒</span>
            
            <span>Cart</span>
            
            <span className="bg-amber-600 text-white text-xs font-black px-2 py-0.5 rounded-full min-w-[20px] text-center shadow-sm">
              {totalCartItems}
            </span>
          </button>
        </nav>

      </div>
    </header>
  );
}