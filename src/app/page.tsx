import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Services } from "@/components/Services";
import { Methodology } from "@/components/Methodology";
import { Differentiators } from "@/components/Differentiators";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Services />
      <Methodology />
      <Differentiators />
      <FAQ />
      <FinalCTA />
    </>
  );
}
