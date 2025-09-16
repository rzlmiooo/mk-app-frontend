'use client'

import { useState, useEffect } from "react"
import axios from "axios";

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


  return storesData
}