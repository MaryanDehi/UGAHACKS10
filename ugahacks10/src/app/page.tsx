"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import "./globals.css";
//import cloud from "C:/Nandu/UGA HACKS/UGAHACKS10/ugahacks10/public/cloudpng.png";
import tree from "../../public/tree.png";

export default function Home() {
  const [cloudPosition, setCloudPosition] = useState(-20);

  useEffect(() => {
    const interval = setInterval(() => {
      setCloudPosition((prev) => (prev >= 100 ? -20 : prev + 0.05));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#BDE0FE] from-50% to-[#DDE5B6] text-[#6C584C] font-sans overflow-hidden z-10">
      
      
      


      {/* Header */}
      <header className="w-full flex justify-between p-6 bg-[#ADC178] shadow-md">
        <h1 className="text-2xl font-bold text-[#6C584C]">Music Therapy</h1>
        <div className="space-x-4">
          <Link href="/signup" className="px-4 py-2 bg-[#A98467] text-white rounded-lg shadow-md hover:bg-[#6C584C] transition">Sign Up</Link>
          <Link href="/login" className="px-4 py-2 bg-[#6C584C] text-white rounded-lg shadow-md hover:bg-[#A98467] transition">Login</Link>
        </div>
      </header>

        <div className="clouds">
        <div className="cloud cloud-1" style={{ top: "10%" }}></div>
        <div className="cloud cloud-2" style={{ top: "30%" }}></div>
        <div className="cloud cloud-3" style={{ top: "50%" }}></div>
        <div className="cloud cloud-4" style={{ top: "70%" }}></div>
      </div>

      {/* Main Content */}
      <main className="flex flex-col items-center gap-6 p-10 text-center max-w-2xl">
        <h2 className="text-3xl font-semibold">Find Your Calm Through Music</h2>
        <p className="text-lg text-[#A98467]">
          Experience the healing power of music therapy. Listen, relax, and improve your mental well-being.
        </p>
        <button className="px-6 py-3 bg-[#ADC178] text-[#6C584C] rounded-lg shadow-md hover:bg-[#A98467] hover:text-white transition">
          Get Started
        </button>
        <div className="treeImageLeft">
          <img src={tree.src} alt="tree" />
        </div>
        {/* <div className="rightTree">
          <img src={tree.src} alt="tree" />
        </div> */}
        
        
          
      </main>

      {/* Footer */}
      <footer className="w-full p-6 bg-[#6C584C] text-white text-center mt-auto">
        <p>&copy; 2025 Music Therapy. All rights reserved.</p>
      </footer>
    </div>
  );
}
