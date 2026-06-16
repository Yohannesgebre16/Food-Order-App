import { useState } from "react";
import { createPortal } from "react-dom";

export default function FormModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: "",
    street: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Order Data:", formData);
    onClose(); 
  };

  return createPortal(
    <div className="fixed inset-0 p-4 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md p-6 md:p-8 rounded-3xl shadow-2xl transition-all scale-100">
        
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
          Delivery Details
        </h2>
        <p className="text-gray-400 text-sm mb-6">
          Please fill out your details to complete your order checkout.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Full Name
            </label>
            <input
              required
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm font-medium text-gray-800 outline-none focus:border-amber-500 focus:bg-white transition-all"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="street" className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Street Address
            </label>
            <input
              required
              type="text"
              id="street"
              name="street"
              value={formData.street}
              onChange={handleInputChange}
              placeholder="123 Main Street"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm font-medium text-gray-800 outline-none focus:border-amber-500 focus:bg-white transition-all"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone" className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Phone Number
            </label>
            <input
              required
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+1 (555) 000-0000"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm font-medium text-gray-800 outline-none focus:border-amber-500 focus:bg-white transition-all"
            />
          </div>

          <div className="flex gap-3 justify-end pt-4 mt-6 border-t border-gray-100">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-3 rounded-xl border border-gray-200 text-gray-500 font-bold text-sm hover:bg-gray-50 active:scale-95 transition-all"
            >
              Back
            </button>
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm active:scale-95 transition-all shadow-md shadow-amber-500/10"
            >
              Confirm Order
            </button>
          </div>

        </form>

      </div>
    </div>,
    document.getElementById("portal-root")
  );
}