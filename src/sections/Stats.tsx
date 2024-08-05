import Image from "next/image";
import React from "react";
import st1 from "../../public/assets/stats/st1.png";
const StatItem: React.FC<{ value: string; label: string }> = ({
  value,
  label,
}) => (
  <div className="mb-4">
    <div className="text-blue-600 text-3xl font-bold">{value}</div>
    <div className="text-gray-600">{label}</div>
  </div>
);

const FeatureItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-center space-x-2 mb-2">
    <svg
      className="w-4 h-4 text-blue-600"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
    <span>{children}</span>
  </li>
);

const Stats: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 p-8 rounded-lg">
        <Image
          src={st1}
          alt="Workspace"
          className="mt-4 rounded-lg"
          objectFit="cover"
        />
      </div>
      <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
        <h2 className="text-3xl font-bold mb-4">Why Opt for Launchwise?</h2>
        <p className="text-gray-600 mb-6">
          Delegate workspace customization and management to us, allowing you to
          concentrate on your core business activities while we ensure your
          workspace is primed for growth.
        </p>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            <div className="w-1 h-6 bg-blue-600 mr-2"></div>
            Prime Nationwide Options
          </h3>
          <p className="text-gray-600 mb-4">
            Explore our diverse and unparalleled portfolio of office spaces,
            offering the finest options strategically located across the nation
          </p>
          <ul className="space-y-2">
            <FeatureItem>Comprehensive Office Solutions</FeatureItem>
            <FeatureItem>Strategically Located Premium Spaces</FeatureItem>
            <FeatureItem>
              Cost-Effective Solutions with Modern Amenities
            </FeatureItem>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Stats;
