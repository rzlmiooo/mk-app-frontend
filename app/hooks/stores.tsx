'use client'

import { useState, useEffect } from "react"
import axios from "axios";
import Image from "next/image";

interface Store {
  id: number;
  store_name: string;
  category: string;
  picture: string;
  description: string;
  review: string;
  rating: number;
  address: string;
  gmaps_link: string;
}

interface StoresResponse {
  stores: Store[];
}

export default function StoresHook() {
  const [storesData, setStoresData] = useState<Store[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseApiUrl = process.env.NEXT_PUBLIC_API_URL;
        const apiStoresUrl = `${baseApiUrl}/stores`;
        const storesRes = await axios.get<StoresResponse>(apiStoresUrl);
        setStoresData(storesRes.data.stores);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };
    fetchData();
  }, []);


  return (
    <div className="relative flex flex-nowrap items-center justify-start overflow-x-scroll pt-10">
      <div className="sticky left-0 mr-2 p-6 w-48 h-80 flex flex-col shrink-0 justify-between items-start text-[#1b1b1b] bg-[#d6b086] rounded-r-2xl z-10 shadow-2xl">
        <h2 className="font-bold text-xl">Rekomendasi Minggu Ini</h2>
        <h3 className="font-bold text-base">Jangan lewatkan kuliner favoritmu!</h3>
      </div>
      {storesData.map((s) => (
        <button key={s.id} className="flex flex-col shrink-0 items-center z-0 justify-start gap-1 m-2 w-48 h-80 rounded-2xl bg-[#444] ">
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
      {storesData.map((s) => (
        <button key={s.id} className="flex flex-col shrink-0 items-center z-0 justify-start gap-1 m-2 w-48 h-80 rounded-2xl bg-[#444] ">
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
  );
}