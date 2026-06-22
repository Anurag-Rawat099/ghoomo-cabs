import CabList from "@/components/CabList";
import CharDhamSection from "@/components/CharDhamSection";
import DestinationSection from "@/components/DestinationSection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import VipCabSection from "@/components/VipCabSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
    
      <Hero />
      <CabList />
      <CharDhamSection/>
      <DestinationSection variant="slider" />
      <VipCabSection/>
    </>
  );
}
