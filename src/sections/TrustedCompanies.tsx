import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import iciciLogo from '../../public/assets/company/icici.png';
import slackLogo from '../../public/assets/company/slack.png';

const companies = [
  { name: 'Spring House', logo: slackLogo },
  { name: 'Slack', logo: slackLogo },
  { name: 'WeWork', logo: null },
  { name: 'OYO Workspace', logo: null },
  { 
    name: 'Razorpay', 
    logo: "https://cdn.iconscout.com/icon/free/png-512/free-razorpay-1649771-1399875.png?f=webp&w=256" 
  },
  { name: 'ICICI Bank', logo: iciciLogo },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

const TrustedCompanies: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants} 
            className="text-4xl font-bold text-gray-800 mb-16 text-center"
          >
            Trusted by the worlds largest companies
          </motion.h2>
          
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12"
          >
            {companies.map((company, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants} 
                className="flex justify-center items-center p-6 rounded-xl bg-white transition-shadow duration-300"
              >
                {company.logo ? (
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={120}
                    height={60}
                    objectFit="contain"
                  />
                ) : (
                  <span className="text-center font-bold text-xl text-gray-700">
                    {company.name}
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
