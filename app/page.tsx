'use client'

import { useState } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import StoresHook from "./hooks/stores";
import Image from "next/image";



export default function Home() {
  const stores = StoresHook();
  const [cardOpen, setCardOpen] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(0);

  const handleCardOpen = (id: number) => {
    setCardOpen(true);
    setIsCardOpen(id);
  }

  return (
    <div className="relative bg-[#111]">
      <Navbar />
      <div className="flex justify-center items-center p-10 h-full">
        <div className="relative flex flex-nowrap items-center justify-start overflow-x-scroll pt-10">
        <div className="sticky left-0 mr-2 p-6 w-48 h-80 flex flex-col shrink-0 justify-between items-start text-[#1b1b1b] bg-[#d6b086] rounded-r-2xl z-10 shadow-2xl">
          <h2 className="font-bold text-xl">Rekomendasi Minggu Ini</h2>
          <h3 className="font-bold text-base">Jangan lewatkan kuliner favoritmu!</h3>
        </div>
          {stores.map((s) => (
            <button key={s.id} onClick={() => handleCardOpen(s.id)} className="flex flex-col shrink-0 items-center z-0 justify-start gap-1 m-2 w-48 h-80 rounded-2xl bg-[#444] ">
              <Image 
                src={s.picture} 
                alt={s.store_name} 
                width={300} 
                height={400} 
                className="w-48 h-auto aspect-[3/4] object-cover rounded-t-2xl"
              />
              <p className="flex p-2 items-center justify-center text-[#f8f8f8] font-medium text-sm">{s.store_name}</p>
            </button>
          ))}
        </div>
        </div>
        {cardOpen == true && (
          <>
          {stores
            .filter((s) => s.id === isCardOpen)
            .map((s) => (
            <div key={s.id} className="flex justify-center items-center">
              <button onClick={() => setCardOpen(false)} className="flex fixed z-30 top-0 h-screen w-full overflow-hidden backdrop-blur-sm"/>
              <div className="fixed flex top-20 justify-center items-center p-6 h-[500px] w-[900px] rounded-2xl bg-[#1b1b1b] text-4xl z-40">{s.store_name}</div>
            </div>
          ))}
          </>
          )
        }
      <Footer />
    </div>
  );
}
