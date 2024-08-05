"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { workspaces } from "@/components/constants";
import { WorkspaceCard } from "./card";
import { Header } from "./header";
import { Subheader } from "./subheader";

const WorkSpaces: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>("Office Space");
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 16 },
      },
    },
  });

  return (
    <div className="container w-full mx-auto px-4 py-12 bg-gray-50 min-h-screen">
      <Header />
      <div className="hidden lg:block">
        <Tabs
          value={selectedTab}
          onValueChange={setSelectedTab}
          className="w-full"
        >
          <TabsList className="mb-8 grid w-[90%] grid-cols-4 gap-2 rounded-full mx-auto">
            {Object.keys(workspaces).map((option) => (
              <TabsTrigger
                key={option}
                value={option}
                className={`px-4 py-2 text-sm font-medium`}
              >
                {option}
              </TabsTrigger>
            ))}
          </TabsList>
          <Subheader />

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-[95%] ml-auto"
            >
              <TabsContent value={selectedTab}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ml-auto">
                  {workspaces[selectedTab].map((option, index) => (
                    <WorkspaceCard key={index} {...option} />
                  ))}
                </div>
              </TabsContent>
            </motion.div>
          </AnimatePresence>
        </Tabs>
      </div>

      <div className="lg:hidden">
        <div ref={sliderRef} className="keen-slider">
          {Object.values(workspaces)
            .flat()
            .map((option, index) => (
              <div key={index} className="keen-slider__slide">
                <WorkspaceCard {...option} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default WorkSpaces;
