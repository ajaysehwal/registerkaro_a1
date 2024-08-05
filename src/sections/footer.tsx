"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin, LucideIcon } from 'lucide-react';
import { Logo } from '@/components/logo';

interface FooterSectionProps {
  title: string;
  items: string[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, items }) => (
  <div className="space-y-4">
    <h3 className="text-sm font-semibold text-gray-400">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
            {item}
          </a>
        </motion.li>
      ))}
    </ul>
  </div>
);

interface SocialIconProps {
  Icon: LucideIcon;
}

const SocialIcon: React.FC<SocialIconProps> = ({ Icon }) => (
  <a href="#" className="text-gray-400 hover:text-white transition-colors">
    <Icon size={20} />
  </a>
);

interface ContactItemProps {
  Icon: LucideIcon;
  text: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ Icon, text }) => (
  <li className="flex items-center space-x-2">
    <Icon size={16} className="text-gray-400" />
    <span className="text-sm">{text}</span>
  </li>
);

const Footer: React.FC = () => {
  const socialIcons: LucideIcon[] = [Facebook, Instagram, Linkedin, Twitter];
  
  const services: string[] = ["Virtual Office", "GST Registration", "Coworking Spaces", "Business Registration", "Mailing Address", "Dedicated Desk"];
  const otherPages: string[] = ["Home", "About Us", "Contact Us", "Blog", "Find Location", "FAQ's"];
  const otherLinks: string[] = ["Privacy Policy", "Disclaimer", "Terms & Conditions", "Cookies", "Refund policy"];

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="col-span-1 lg:col-span-2 space-y-6">
          <Logo color="white" />
          <div className="flex space-x-4">
            {socialIcons.map((Icon, index) => (
              <SocialIcon key={index} Icon={Icon} />
            ))}
          </div>
        </div>

        <FooterSection title="Services" items={services} />
        <FooterSection title="Other Pages" items={otherPages} />
        <FooterSection title="Other Link" items={otherLinks} />

        <div className="col-span-1 lg:col-span-2 space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 mb-4">Join the newsletter</h3>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Enter your email" className="bg-gray-800 border-gray-700 text-white" />
              <Button className="bg-blue-600 hover:bg-blue-700 transition-colors">Subscribe</Button>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 mb-4">Feel free to connect with us</h3>
            <ul className="space-y-2">
              <ContactItem Icon={Phone} text="+91 99112 21210" />
              <ContactItem Icon={Mail} text="virtualoffice@teamco.work" />
              <ContactItem Icon={MapPin} text="704, Palm Court, Mehrauli-Gurgaon Rd, Gurugram, Haryana 122007" />
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;