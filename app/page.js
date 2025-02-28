import Image from "next/image";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import Client from "./components/Client";
import Sixth from "./components/Sixth";
import SemiFooter from "./components/SemiFooter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <First/>
      <Second/>
      <Third/>
      <Fourth/>
      <Client/>
      <Sixth/>
      <SemiFooter/>
      <Footer/>
    </div>
  );
}
