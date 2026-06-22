import CabList from "@/components/CabList";
import CharDhamSection from "@/components/CharDhamSection";
import DestinationSection from "@/components/DestinationSection";
import Hero from "@/components/Hero";

import VipCabSection from "@/components/VipCabSection";


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
