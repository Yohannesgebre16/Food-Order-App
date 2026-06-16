import { createPortal } from "react-dom";
import { useCart } from "../Contexts/CartContext.jsx";

export default function CartModal({ children, isClicked, onClose , onCheckout }) {
  if (!isClicked) return null;

  const { cartItems, addToCart, removeFromCart, totalPrice } = useCart();

  return createPortal(
    <div className="p-4 fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
      <div className="bg-white p-6 md:p-8 rounded-3xl shadow-2xl mx-4 max-w-lg w-full flex flex-col max-h-[85vh]">
        
        <div className="text-xl md:text-2xl font-bold text-gray-800 border-b border-gray-100 pb-4 mb-4 flex justify-between items-center">
          {children}
          <span className="text-sm font-normal text-gray-500">
            ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})
          </span>
        </div>

        <div className="overflow-y-auto pr-1 flex-1 space-y-4 max-h-[40vh]">
          {cartItems.length === 0 ? (
            <div className="text-center py-8 text-gray-400 font-medium">
              Your cart is empty. Add some delicious food! 🛒
            </div>
          ) : (
            cartItems.map((item) => (
              <div 
                key={item.id} 
                className="flex items-center justify-between p-3 rounded-2xl bg-gray-50 border border-gray-100/50 transition-all"
              >
                <div className="flex flex-col gap-0.5">
                  <h4 className="text-base md:text-lg font-semibold text-gray-800">{item.name}</h4>
                  <span className="text-xs font-bold text-amber-600">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center gap-3 bg-white px-3 py-1.5 rounded-xl shadow-sm border border-gray-100">
                  <button
                    type="button"
                    className="w-7 h-7 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-red-50 hover:text-red-600 font-bold text-sm transition-colors"
                    onClick={() => removeFromCart(item.id)}
                  >
                    -
                  </button>
                  
                  <span className="text-gray-800 font-bold text-sm w-5 text-center">
                    {item.quantity}
                  </span>
                  
                  <button
                    type="button"
                    className="w-7 h-7 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-amber-50 hover:text-amber-600 font-bold text-sm transition-colors"
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border-t border-gray-100 pt-4 mt-6">
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-500 font-semibold">Total Price:</span>
            <span className="text-2xl font-black text-gray-900">${totalPrice.toFixed(2)}</span>
          </div>

          <div className="flex gap-3 justify-end">
            <button
              type="button"
              className="px-5 py-3 rounded-xl border border-gray-200 text-gray-500 font-bold text-sm hover:bg-gray-50 active:scale-95 transition-all"
              onClick={onClose}
            >
              Cancel
            </button>
            
            <button
              type="button"
              disabled={cartItems.length === 0}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 disabled:bg-gray-200 disabled:cursor-not-allowed text-white font-bold text-sm active:scale-95 transition-all shadow-md shadow-amber-500/10"
              onClick={onCheckout}
            >
              Go to checkout
            </button>
          </div>
        </div>

      </div>
    </div>,
    document.getElementById("portal-root")
  );
}