import { useState } from "react";
import { createPortal } from "react-dom";
import { useCart } from "../Contexts/CartContext.jsx";

export default function FormModal({isOpen , onClose}) {
  if (!isOpen) return null;

  const { cartItems, totalPrice, clearCart } = useCart();
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState({ name: "", email: "", street: "", "postal-code": "", city: "" });

  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order: { items: cartItems, total: totalPrice, customer: data } }),
      });
      setStatus("success");
      clearCart();
    } catch {
      setStatus("idle");
    }
  };

  if (status === "success") {
    return createPortal(
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg text-center">
          <h2 className="text-xl font-bold mb-4">Order Sent Successfully!</h2>
          <button onClick={() => { setStatus("idle"); onClose(); }} className="p-2 bg-black text-white rounded">Close</button>
        </div>
      </div>,
      document.getElementById("portal-root")
    );
  }

  return createPortal(
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg space-y-3 w-80">
        <h2 className="text-xl font-bold">Checkout (${totalPrice.toFixed(2)})</h2>
        
        {["name", "email", "street", "postal-code", "city"].map((field) => (
          <div key={field}>
            <label className="block text-xs font-bold capitalize">{field.replace("-", " ")}</label>
            <input required name={field} type={field === "email" ? "email" : "text"} value={data[field]} onChange={handleChange} className="w-full p-1 border rounded" />
          </div>
        ))}

        <div className="flex gap-2 justify-end pt-2">
          <button type="button" onClick={onClose} className="p-2 border rounded">Cancel</button>
          <button type="submit" disabled={status === "sending"} className="p-2 bg-amber-500 text-white rounded font-bold">
            {status === "sending" ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>
    </div>,
    document.getElementById("portal-root")
  );
}