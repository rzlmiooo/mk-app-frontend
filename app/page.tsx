import Navbar from "./components/navbar";
import Footer from "./components/footer";
import StoresCard from "./components/storesCard";

export default function Home() {
  return (
    <div className="relative bg-[#111]">
      <Navbar />
      <StoresCard />
      <Footer />
    </div>
  );
}
