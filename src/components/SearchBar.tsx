import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { CITIES } from "./constants";
import { Separator } from "./ui/separator";
import { fadeInUp } from "./anim";

export const SearchBar: React.FC<{}> = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCities, setFilteredCities] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filtered = CITIES.filter((city) =>
        city.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCities(filtered);
      setIsDropdownOpen(true);
    } else {
      setFilteredCities([]);
      setIsDropdownOpen(false);
    }
  }, [searchTerm]);

  return (
    <motion.div
      className="max-w-2xl mx-auto mb-12 relative"
      variants={fadeInUp}
      transition={{ delay: 0.4, duration: 0.8 }}
    >
      <div className="flex shadow-lg rounded-lg overflow-hidden">
        <input
          type="text"
          placeholder="Search city"
          className="w-full p-4 text-gray-700 focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 transition duration-300 ease-in-out">
          Search
        </button>
      </div>
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            className="absolute w-full mt-2 bg-white rounded-lg shadow-xl overflow-hidden z-10"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {filteredCities.map((city, index) => (
              <motion.div
                key={city}
                className="p-3 text-gray-700 hover:bg-gray-100 cursor-pointer border-b border-gray-400"
                variants={fadeInUp}
                transition={{ delay: index * 0.05 }}
                onClick={() => {
                  setSearchTerm(city);
                  setIsDropdownOpen(false);
                }}
              >
                {city}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
