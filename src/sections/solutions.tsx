import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import s2 from "../../public/assets/solutions/s2.png";
import { Dot } from "lucide-react";

const features = [
  {
    title: "Prestigious Business Addresses",
    description:
      "Gain instant credibility with premium office locations in prime business districts.",
  },
  {
    title: "Mail Handling Services",
    description:
      "Efficient mail management services, including forwarding, scanning, and storage.",
  },
  {
    title: "Flexibility and Cost-Effectiveness",
    description:
      "Scalable solutions at affordable prices, avoiding the high costs associated with traditional office space.",
  },
  {
    title: "Business Expansion",
    description:
      "Easily expand into new markets without the overhead costs of physical office space, enabling growth and scalability.",
  },
  {
    title: "Nationwide Presence",
    description:
      "Establish a presence across multiple cities without the need for physical offices.",
  },
  {
    title: "Professional Call Answering",
    description:
      "Dedicated receptionists handle your calls, creating a professional image for your business.",
  },
  {
    title: "Meeting Room Facilities",
    description:
      "Access to well-equipped meeting rooms and conference facilities to conduct client meetings, allowing for seamless collaboration and presentations.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const FeatureItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <motion.li variants={itemVariants} className="flex items-start space-x-3">
    <Dot className="w-5 h-5 mt-1 text-black-500 flex-shrink-0" />
    <div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-600">{description}</p>
    </div>
  </motion.li>
);

const WorkspaceSolution = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 py-16"
    >
      <div className="flex flex-col lg:flex-row gap-12">
        <motion.div variants={itemVariants} className="lg:w-1/2">
          <div className="flex items-center justify-center h-full">
            <Image
              src={s2}
              alt="Workspace"
              width={500}
              height={500}
              className="object-cover rounded-lg"
            />
          </div>
        </motion.div>

        <div className="lg:w-1/2 space-y-8">
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-gray-800"
          >
            Discover the Ultimate Workspace Solution
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600">
            From solo entrepreneurs to growing teams, find everything you need
            under one roof. Discover DTpro and redefine the workspace
            experience. Our flexible options cater to your unique needs,
            allowing you to focus on what truly matters - your business growth.
          </motion.p>
          <motion.ul
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <FeatureItem key={index} {...feature} />
            ))}
      
          </motion.ul>
          <motion.div variants={itemVariants} className="flex items-center justify-center">
          <Button variant="link" className="text-blue-500">
            Talk to our experts
          </Button>
        </motion.div>
        </div>
       
      </div>
    </motion.section>
  );
};

export default WorkspaceSolution;
