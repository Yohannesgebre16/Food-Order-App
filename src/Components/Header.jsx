import logoImg from '../assets/logo.jpg';

export default function Header() {
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
            className="relative flex items-center gap-2 bg-amber-50 hover:bg-amber-100 text-amber-700 font-bold py-2.5 px-5 rounded-full transition-all duration-200 group active:scale-95 text-sm md:text-base border border-amber-200/50"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2.5} 
              stroke="currentColor" 
              className="w-5 h-5 transition-transform group-hover:-translate-y-0.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            
            <span>Cart</span>
            
            <span className="bg-amber-600 text-white text-xs font-black px-2 py-0.5 rounded-full min-w-[20px] text-center shadow-sm">
              0
            </span>
          </button>
        </nav>

      </div>
    </header>
  );
}