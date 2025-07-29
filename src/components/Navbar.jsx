import { useEffect, useState } from "react";
import { Home, HomeIcon } from "lucide-react";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 640) {
      setTimeout(() => setShowNavbar(true), 100); 
    }
  }, []);

  return (
    <div className="hidden sm:flex justify-center mt-4">
      <div
        className={`
          transition-all duration-700 ease-in-out transform
          ${showNavbar ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"}
          rounded-full bg-black text-white px-10 py-4 flex gap-16 shadow-2xl
        `}
      >
       
        <div className="transition-transform duration-300 hover:scale-150 cursor-pointer"><HomeIcon/></div>
        <div className="transition-transform duration-300 hover:scale-110 cursor-pointer">About</div>
        <div className="transition-transform duration-300 hover:scale-110 cursor-pointer">Projects</div>
        <div className="transition-transform duration-300 hover:scale-110 cursor-pointer">Blogs</div>
   
      </div>
    </div>
  );
}
