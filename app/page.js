import Image from "next/image";
import First from "./components/First";
import Secondr from "./components/Secondr";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import Sixth from "./components/Sixth";
import SemiFooter from "./components/SemiFooter";
import Footer from "./components/Footer";
import TestimonialSlider from "./components/TestimonialSilder";

export default function Home() {
  return (
    <div>
      <First/>
      <Secondr/>
      <Third/>
      <Fourth/>
      <TestimonialSlider/>
      <Sixth/>
    </div>
  );
}
