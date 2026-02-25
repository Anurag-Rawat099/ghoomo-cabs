import CabList from "@/components/CabList";
import DestinationSection from "@/components/DestinationSection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    
      <Hero />
      <CabList />
      <DestinationSection variant="slider" />
    </>
  );
}
