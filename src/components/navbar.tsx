"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown, User, Phone } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Logo } from "./logo";
import { Separator } from "@/components/ui/separator";

interface MenuItem {
  label: string;
  items?: string[];
  href?: string;
}

const menuItems: MenuItem[] = [
  {
    label: "Workspace & Services",
    items: ["Option 1", "Option 2", "Option 3"],
  },
  { label: "Get Started", href: "/get-started" },
  { label: "More", items: ["Item 1", "Item 2", "Item 3"] },
  { label: "Help", href: "/help" },
];

interface DropdownMenuProps {
  item: MenuItem;
  index: number;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="relative"
      onHoverStart={() => setIsOpen(true)}
      onHoverEnd={() => setIsOpen(false)}
    >
      <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center">
        {item.label}
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          >
            <div className="py-1">
              {item.items?.map((subItem: string, subIndex: number) => (
                <Link
                  key={subIndex}
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out"
                >
                  {subItem}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 bg-white ${
        isScrolled ? "shadow-md" : ""
      } transition-shadow duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link href="/" className="flex-shrink-0">
              <Logo width={70} height={70} color="black" />
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-4">
            {menuItems.map((item, index) =>
              item.items ? (
                <DropdownMenu key={index} item={item} index={index} />
              ) : (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href || "#"}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              )
            )}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-gray-100 transition duration-300"
              >
                <Phone className="h-5 w-5" />
              </Button>
            </motion.div>
            <Separator orientation="vertical" className="h-6" />
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-gray-100 transition duration-300"
              >
                <User className="h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link href={"/getadvice"}>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                  ENQUIRE NOW
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-gray-100 transition duration-300"
              >
                <Phone className="h-5 w-5" />
              </Button>
            </motion.div>
            <Separator orientation="vertical" className="h-6" />
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-gray-100 transition duration-300"
              >
                <User className="h-5 w-5" />
              </Button>
            </motion.div>
            <Sheet>
              <SheetTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-gray-100 transition duration-300"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </motion.div>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-4">
                  {menuItems.map((item, index) => (
                    <div key={index}>
                      {item.items ? (
                        <details className="group">
                          <summary className="list-none flex justify-between items-center cursor-pointer">
                            <span className="text-gray-700 hover:text-gray-900">
                              {item.label}
                            </span>
                            <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition duration-300" />
                          </summary>
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-2 ml-4 space-y-2"
                          >
                            {item.items.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                href="#"
                                className="block text-sm text-gray-600 hover:text-gray-900 transition duration-150"
                              >
                                {subItem}
                              </Link>
                            ))}
                          </motion.div>
                        </details>
                      ) : (
                        <Link
                          href={item.href || "#"}
                          className="text-gray-700 hover:text-gray-900 block transition duration-150"
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                      ENQUIRE NOW
                    </Button>
                  </motion.div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
