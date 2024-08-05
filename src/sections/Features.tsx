import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { FEATURE_ITEMS, Feature } from "@/components/constants";
const FeatureCard: React.FC<Feature> = ({ title, description, img }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 relative w-[100px] h-[100px] rounded-lg flex items-center justify-center overflow-hidden transition-colors duration-300">
            <Image src={img} width={100} height={100} alt="img" />
          </div>
          <div className="flex-grow">
            <div className="flex flex-col mb-3">
              <h1 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                {title}
              </h1>
              <span className="border border-black w-[40%]"></span>
            </div>
            <p className="text-sm text-gray-600 mb-4">{description}</p>
            <motion.div
              className="flex items-center text-blue-500 font-medium cursor-pointer"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Learn More <ArrowRight className="w-4 h-4 ml-2" />
            </motion.div>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const FeatureGrid: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURE_ITEMS.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid;
