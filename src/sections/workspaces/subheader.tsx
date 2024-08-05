import { motion } from "framer-motion";

export const Subheader: React.FC = () => (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="text-sm text-gray-600 mb-8 w-[95%] ml-auto"
    >
      Our flexible, fully-customisable office rentals are available by the hour,
      day, or as long as you need.
    </motion.p>
  );