import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Flag } from "lucide-react";

export const Header: React.FC = () => (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row justify-between items-center mb-8"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">
        Flexible workspace designed around your needs
      </h1>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <Button size="icon" variant="outline" className="rounded-full">
            <Flag className="h-4 w-4" />
          </Button>
          <p className="text-sm text-gray-800">Prices for India</p>
        </div>
      </div>
    </motion.div>
  );