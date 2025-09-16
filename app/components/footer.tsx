import Link from "next/link";
import Image from "next/image";
import { Delicious_Handrawn } from "next/font/google";

// Delicious Handrawn (hanya ada 1 weight = 400)
const deliciousHandrawn = Delicious_Handrawn({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-delicious-handrawn",
});

export default function Footer() {
    return (
        <footer className="bg-[#1b1b1b] shadow-2xl">
            <div className="mx-auto w-full max-w-screen-xl px-12 sm:px-22 py-8 sm:py-6 lg:py-8">
                <div className="flex flex-col md:flex-row md:justify-between gap-8 text-[#f8f8f8]/90">
                    {/* link logo, kemudian deskripsi */}
                    <div className="w-full md:w-1/2 mb-2">
                    <Link href="#" className="flex items-center gap-4">
                        <Image 
                            src="/images/logo.svg" 
                            alt="Logo" 
                            width={100} 
                            height={100} 
                            priority 
                            className="invert w-8 h-auto aspect-square object-cover object-top"
                        />
                        <p className={`font-bold ${deliciousHandrawn.className} text-3xl pr-8`}>Magetan Kuliner</p>
                    </Link>
                        <p className="pt-8 text-start text-sm">Magetan Kuliner adalah website informasi kuliner di wilayah Kabupaten Magetan. Dibangun dari hati untuk membantu UMKM agar kuliner di Magetan semakin dikenal secara daerah maupun nasional khususnya para turis lokal maupun mancanegara.</p>
                    </div>
                    {/* link */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h2 className="mb-4 text-base font-semibold text-[#f8f8f8]/90 uppercase">
                                Jelajahi
                            </h2>
                            <ul className="text-[#f8f8f8]/90 text-sm">
                                <li className="mb-2">
                                    <Link href="/home" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="/home/about" className="hover:underline">
                                        Tentang Kami
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="#" className="hover:underline">
                                        Hubungi Kami
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 text-base font-semibold text-[#f8f8f8]/90 uppercase">
                                Ikuti kami
                            </h2>
                            <ul className="text-[#f8f8f8]/90 text-sm">
                                <li className="mb-2"><a href="https://www.instagram.com/unimaticscommunity/" target="_blank" className="hover:underline">Instagram</a></li>
                                <li className="mb-2"><a href="https://www.tiktok.com/@universeinformatics/" target="_blank" className="hover:underline">Tiktok</a></li>
                                <li className="mb-2"><a href="https://www.linkedin.com/company/unimatics-unipmaverse-informatics/" target="_blank" className="hover:underline">LinkedIn</a></li>
                                <li className="mb-2"><a href="https://github.com/rzlmiooo/unimatics" target="_blank" className="hover:underline">Github</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 text-base font-semibold text-[#f8f8f8]/90 uppercase">
                                ketentuan
                            </h2>
                            <ul className="text-[#f8f8f8]/90 text-sm">
                                <li className="mb-2">
                                    <a href="#" className="hover:underline">
                                        Ketentuan Privasi
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Informasi Lisensi
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                {/* Bottom Bar */}
                <div className="flex flex-col sm:flex-row justify-between items-center text-center text-sm text-[#f8f8f8]/90/80 gap-4">
                    <span>
                        © 2025 <a href="#" className="hover:underline">Magetan Kuliner™</a>. All Rights Reserved.
                    </span>
                    <span>
                        Website by <a href="https://lawu-digital.vercel.app" target="_blank" rel="noopener noreferrer" className="font-bold">Lawu Digital</a>
                    </span>
                </div>
            </div>
        </footer>
    );
}
