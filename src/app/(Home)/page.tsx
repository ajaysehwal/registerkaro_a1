"use client";
import FAQ from "@/sections/Faq";
import Features from "@/sections/Features";
import Footer from "@/sections/footer";
import HeroSection from "@/sections/HeroSection";
import LowerFooter from "@/sections/LowerFooter";
import WorkspaceSolution from "@/sections/solutions";
import Stats from "@/sections/Stats";
import Testimonial from "@/sections/Testimonial";
import TrustedCompanies from "@/sections/TrustedCompanies";
import VirtualAddressFeatures from "@/sections/VirtualAddress";
import WorkSpaces from "@/sections/workspaces";
export default function Home() {
 
  return (
    <main>
      <HeroSection />
      <Features />
      <WorkSpaces />
      <WorkspaceSolution/>
      <VirtualAddressFeatures />
      <TrustedCompanies />
      <Testimonial/>
      <Stats/>
      <FAQ/>
    </main>
  );
}
