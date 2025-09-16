import Navbar from "./components/navbar";
import Footer from "./components/footer";
import StoresHook from "./hooks/stores";

export default function Home() {
  return (
    <div className="bg-[#111]">
      <Navbar />
      <div className="flex justify-center items-center p-10 h-full">
        <StoresHook />
      </div>
      <Footer />
    </div>
  );
}
