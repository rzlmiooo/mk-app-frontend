'use client'

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Delicious_Handrawn } from "next/font/google";

const deliciousHandrawn = Delicious_Handrawn({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-delicious-handrawn",
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <nav className="fixed w-full flex justify-between items-center px-8 py-2 xl:px-16 bg-[#1b1b1b]/80 backdrop-blur-md shadow-md shadow-gray-900 z-20">
        <ul className="flex items-center font-medium text-[#d6b086]">
          {/* iki link logo */}
          <Link href="/" className="flex items-center gap-4 w-full">
            <Image src="/images/logo.svg" alt="Logo" width={100} height={100} priority className="invert w-8 h-auto aspect-square object-cover object-top"/>
            <p className={` ${deliciousHandrawn.className} text-3xl bg-gradient-to-r from-[#f8f8f8] to-[#f8f8f8] hover:from-yellow-400 hover:to-blue-500 bg-clip-text text-transparent transition-colors duration-300 ease-in-out shadow-md`}>Magetan Kuliner</p>
          </Link>
        </ul>
        {/* Search Bar */}
        <div className="flex bg-transparent placeholder:text-slate-400 text-slate-300 text-sm border border-slate-200 rounded-4xl px-1  py-1 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow">
          <input
            className="px-3 rounded-4xl focus:outline-none focus:border-[#1b1b1b] focus:ring-1 focus:ring-[#1b1b1b]"
            placeholder="Bakso, Nasi Goreng, Bolu..."
          />
          <button
            className="flex items-center rounded-4xl bg-[#d6b086] py-1 px-2.5 border border-transparent text-center text-sm text-[#1b1b1b] transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-[#b59572] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
              <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
            </svg>
      
            Search
          </button> 
        </div>
        {/* iki link keluar page */}
        <ul className="hidden lg:flex items-center gap-5 font-bold text-[#d6b086]">
          <li><Link href="/" className="text-base font-bold hover:text-lg transform duration-300 hidden lg:block">Home</Link></li>
          <li><Link href="/about" className="text-base font-bold hover:text-lg transform duration-300 hidden lg:block">Wishlist</Link></li>
          <li><Link href="/learning-path" className="text-base font-bold hover:text-lg transform duration-300 hidden lg:block">Review Anda</Link></li>
          <li><Link href="/" className="rounded-2xl bg-gradient-to-r from-[#f8f8f8] to-[#f8f8f8] hover:bg-gradient-to-r hover:from-yellow-300 hover:to-blue-400 transition-colors ease-in-out duration-300 text-gray-900 px-4 py-2">Daftar</Link></li>
        </ul>
        {/* iki tombol menu - khusus tampilan mobile */}
        {!isOpen && (
          <button 
            className="fixed right-10 block lg:hidden z-50 text-[#f8f8f8]"
            onClick={() => setIsOpen(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button> 
        )}
       </nav>
       {/* iki animasi + sidebar */}
       <AnimatePresence>
       {isOpen && (
         <>
            {/* iki efek blur background */}
            <motion.button 
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)} 
              className="flex fixed z-30 top-0 h-screen w-full overflow-hidden backdrop-blur-sm"/>
            <motion.aside 
              key="sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex flex-col justify-start items-start p-8 fixed z-30 top-0 right-0 w-2/3 h-dvh bg-linear-to-r from-[#161688] to-gray-900"
           >
              {/* iki tombol close */}
              <button 
                className="fixed top-5 right-10 block sm:hidden z-50 text-[#f8f8f8]"
                onClick={() => setIsOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
              </button>
              {/* konten sidebar */}
              <ul className="flex flex-col items-start gap-6 font-medium text-[#f8f8f8] border-b pb-6 pt-12">
                {/* link logo */}
                <Link href="/" className="flex items-center gap-4 border-b pb-6">
                  <Image src="/images/logo-unimatics.svg" alt="Logo" width={100} height={100} priority className="w-8 h-auto"/>
                  <p className="font-bold text-2xl pr-8">UniMatics</p>
                </Link>
                {/* link internal */}
                <li><Link href="/" className="text-base">Home</Link></li>
                <li><Link href="/about" className="text-base">About</Link></li>
                <li><Link href="/learning-path" className="text-base">Learning Path</Link></li>
              </ul>
              {/* link external */}
              <p className="font-bold pt-6 text-[#f8f8f8]">Follow Us:</p>
              <ul className="grid grid-cols-2 grid-rows-3 items-center justify-center gap-6 font-bold text-[#f8f8f8] pt-6">
                <li className="row-span-1"><a href="https://www.tiktok.com/@universeinformatics/" target="_blank"><Image src="/images/tiktok.svg" alt="linkedin" width={100} height={100} className="invert w-6 h-auto"/></a></li>
                <li className="row-span-1"><a href="https://www.instagram.com/unimaticscommunity/" target="_blank"><Image src="/images/instagram.svg" alt="linkedin" width={100} height={100} className="invert w-6 h-auto"/></a></li>
                <li className="row-span-1"><a href="https://github.com/rzlmiooo/unimatics" target="_blank"><Image src="/images/github.svg" alt="linkedin" width={100} height={100} className="invert w-6 h-auto"/></a></li>
                <li className="row-span-1"><a href="https://www.linkedin.com/company/unimatics-unipmaverse-informatics/" target="_blank"><Image src="/images/linkedin.svg" alt="linkedin" width={100} height={100} className="invert w-6 h-auto"/></a></li>
                <li className="col-span-2 mt-4"><Link href="/" className="rounded-2xl bg-[#f8f8f8] text-gray-900 px-4 py-2">Join UniMatics</Link></li>
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
      </>
    )
}