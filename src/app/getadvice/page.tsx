"use client";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import Image from "next/image";
import { fadeInUp } from "../../components/anim";

const WaveAnimation = () => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden">
    <svg
      className="relative block w-full h-[100px] md:h-[150px]"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        className="fill-white opacity-20"
      ></path>
    </svg>
    <svg
      className="relative block w-full h-[100px] md:h-[150px] -mt-[100px] md:-mt-[150px]"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
        className="fill-white opacity-30"
      ></path>
    </svg>
  </div>
);

export default function Home() {
  return (
    <div className="relative flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 p-4 sm:p-8 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-1/2 relative mb-8 lg:mb-0"
      >
        <Image
          src="https://s3-alpha-sig.figma.com/img/ec80/b5a6/fe0d1282ac56ded2dbf76935cc68de0d?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jMvzc1xz8v2ZrElu2-wPGjbR6Zf-FX9DosRhPcl4nAsnEVi~G5WLo7NWPh1OkF5rbHr6IxxQc3Tv83O3SYvDZ9gawPSQt349vsYcfxgJz3yr5p3frkQSnjWVq20Kh4TQe0ecqGVoE9XWKkKOA6ph6JAdVCXqXYzC0BKah0yIDyBPJaiXW94wITgWHFYSb9jNzkOtbTM7h9FgkiJiRPMRUyTHk86aPKgUQ9jvbXuBqIn0WeGDGTfjZqwYgXOqVaQiedD21208Ar17MFDeYfycJ4Qrt03fFdi~AIy7T9-TG403ngM5Z7UJaojo6lnldNbZvmw3Z9MIGRjJAnv3HCMfKw__"
          alt="Confused businessman"
          layout="fill"
          objectFit="contain"
          className="rounded-lg z-20"
        />
      </motion.div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center space-y-8">
        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
          className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full transform hover:scale-105 transition-transform duration-300"
        >
          <Image
            src="https://s3-alpha-sig.figma.com/img/90e4/7bea/069a6666a100ff53ce7bf9d75c0179c5?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gcK1f3XdS~nrkg2fK0xgFyIInyRO4G3HwiCeqA0wSFEAVs53pVY~LFQZNIrNBXXY4dFG-Y9hhd5zQw1DOT-~Ot646MWAb7jgz~EVpSbUh4ugvYkIkWBuo9KGroijsVhh7krN58~jpD2WCZjhUJyDV4tncoaek8VPbXe1qfbA4u4ECQJhu45ppZjJd6A-7Gmj7I-Whh1KO0pYfz-7AWJLTKm6fwof6vfu6w97RMZ6E-z59Osd5~6mB~nmcSBVT54gh9SFAwf6gl0eJL~jD~pI~p7UivUy7VMbg7km48Xm7gao5vtaDlPv63d3JQUazER~CGlxduwftxLFg6UU9EClww__"
            alt="RegisterKaro"
            width={200}
            height={60}
            className="m-auto"
          />
        </motion.div>
        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.4 }}
          className="bg-blue-800 p-8 rounded-lg shadow-xl max-w-md w-full backdrop-blur-sm bg-opacity-80 z-20"
        >
          <h2 className="text-2xl sm:text-3xl text-white mb-6 leading-tight">
            Still confused about your business incorporation?{" "}
            <span className="text-yellow-400 font-semibold">
              Take the first step
            </span>{" "}
            by filling out the form below.
          </h2>
          <form className="space-y-6">
            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.5 }}
            >
              <Input
                placeholder="Full Name"
                className="bg-blue-700 text-white placeholder-blue-300 focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
              />
            </motion.div>
            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.6 }}
            >
              <Input
                placeholder="Enter Your Email"
                type="email"
                className="bg-blue-700 text-white placeholder-blue-300 focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
              />
            </motion.div>
            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.7 }}
              className="flex space-x-2"
            >
              <Select>
                <SelectTrigger className="w-[100px] bg-blue-700 text-white focus:ring-2 focus:ring-yellow-400 transition-all duration-300">
                  <SelectValue placeholder="IN +91" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="in">IN +91</SelectItem>
                  {/* Add more country codes as needed */}
                </SelectContent>
              </Select>
              <Input
                placeholder="Mobile Number"
                className="flex-1 bg-blue-700 text-white placeholder-blue-300 focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
              />
            </motion.div>
            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg shadow-lg transform transition-all duration-300">
                Get Expert Advice Now!
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
      <WaveAnimation />
    </div>
  );
}