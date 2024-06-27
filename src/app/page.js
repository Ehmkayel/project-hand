
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Team from "@/components/Team";
import { Who } from "@/components/Who";
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Hero/>
      <Who/>
      <Team/>
      <Metrics/>
      <Contact/>
      
    </main>
  );
}
