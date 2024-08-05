"use client";
import { LowFooterContent } from "@/components/constants";
import React from "react";

interface FooterSectionProps {
  title: string;
  cities: string[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, cities }) => (
  <div className="mb-6">
    <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{cities.join(" | ")}</p>
  </div>
);

const LowerFooter: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {LowFooterContent.map((section, index) => (
          <FooterSection
            key={index}
            title={section.title}
            cities={section.cities}
          />
        ))}
        <div className="flex justify-between text-gray-500 text-xs mt-8">
          <p>Copyright © 2019, Team Cowork, All Rights Reserved</p>
          <p>Powered by MXN Realspaces Pvt Ltd</p>
        </div>
      </div>
    </footer>
  );
};

export default LowerFooter;
