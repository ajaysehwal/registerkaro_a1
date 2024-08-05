import React from "react";
import { motion } from "framer-motion";
import { TRENDING_ITEMS } from "@/components/constants";
import { BackgroundImage } from "@/components/backgroundImage";
import { SearchBar } from "@/components/SearchBar";
import { TrendingCities } from "@/components/TradingCities";
import { fadeInUp } from "@/components/anim";

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <BackgroundImage />
      <ContentWrapper>
        <Header />
        <SearchBar />
        <TrendingCities items={TRENDING_ITEMS} />
      </ContentWrapper>
    </div>
  );
};

interface ContentWrapperProps {
  children: React.ReactNode;
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => (
  <motion.div
    className="relative z-10  text-white max-w-4xl px-4"
    variants={fadeInUp}
    initial="initial"
    animate="animate"
    transition={{ duration: 1, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const Header: React.FC = () => (
  <div className="text-center">
    <p>From a single desk to a whole building. The choice is yours.</p>
    <motion.h1
      className="text-3xl md:text-4xl font-extrabold mb-8 leading-tight"
      variants={fadeInUp}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      Discover the Ultimate Workspace Solution
    </motion.h1>
  </div>
);

export default HeroSection;
