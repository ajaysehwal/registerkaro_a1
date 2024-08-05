import { motion } from "framer-motion";
import { fadeInUp } from "./anim";
import { TRENDING_ITEMS } from "./constants";
import Image from "next/image";
export const TrendingCities: React.FC<{ items: typeof TRENDING_ITEMS }> = ({
    items,
  }) => (
    <div>
      <motion.div
        className="text-xl font-semibold mb-4 w-[80%] m-auto"
        variants={fadeInUp}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <p>Trending Cities</p>
      </motion.div>
      <motion.div
        className="flex justify-center flex-wrap gap-6"
        variants={fadeInUp}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            variants={fadeInUp}
            transition={{ delay: 0.1 * index + 0.6 }}
          >
            <div className="bg-white backdrop-filter backdrop-blur-lg rounded-lg p-3 hover:bg-opacity-30 transition duration-300 ease-in-out w-20 h-20 flex items-center justify-center mb-2">
              <Image src={item.img} alt={item.label} width={40} height={40} />
            </div>
            <p className="text-sm font-medium">{item.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
  