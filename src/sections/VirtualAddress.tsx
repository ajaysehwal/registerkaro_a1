import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Building, FileText, Mail, PhoneCall, Users } from "lucide-react";
import vs1 from "../../public/assets/virtualsolutions/vs1.png";
const features = [
  {
    icon: <Building className="w-12 h-12 text-blue-500" />,
    title: "Company Registration",
    description:
      "Enhance your professional image and organizational presence by choosing a virtual address over your residential one.",
  },
  {
    icon: <FileText className="w-12 h-12 text-blue-500" />,
    title: "Streamlined GST Registration",
    description:
      "Simplify your GST registration process through the use of a virtual address, meeting government requirements efficiently and affordably.",
  },
  {
    icon: <Mail className="w-12 h-12 text-blue-500" />,
    title: "Centralized Business Hub",
    description:
      "Establish your virtual office as the hub of your business operations, utilizing it as your official business and mailing address, ensuring efficient mail handling without physical office space constraints.",
  },
  {
    icon: <PhoneCall className="w-12 h-12 text-blue-500" />,
    title: "Efficient Call Management",
    description:
      "Ensure seamless communication with clients and stakeholders by routing all calls to your virtual address, where a virtual receptionist provides professional and prompt responses.",
  },
  {
    icon: <Users className="w-12 h-12 text-blue-500" />,
    title: "Flexible Meeting Solutions",
    description:
      "Impress investors and clients with access to fully equipped meeting facilities, including boardrooms and conference rooms, available on-demand without the commitment of traditional office leases.",
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

const VirtualAddressFeatures: React.FC = () => {
  return (
    <div className="bg-[rgb(246,246,246)] py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:w-2/3 space-y-6"
          >
            <motion.h2
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl font-semibold mb-8 text-gray-800"
            >
              Use Virtual Address For
            </motion.h2>
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="rounded-lg hover:shadow-lg transition-shadow duration-300 p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 bg-white rounded-full p-3">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-blue-600 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="lg:w-1/3 flex items-center justify-center"
          >
            <div className="rounded-lg flex place-items-center overflow-hidden w-full h-full">
              <Image
                src={vs1}
                alt="Business meeting"
                width={500}
                height={700}
                className="object-cover m-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VirtualAddressFeatures;
