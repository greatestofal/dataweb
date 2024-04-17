import React from "react";

import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="max-w-[1240px mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300]">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">DW</h1>
        <p className="text-white py-4">
          Discover actionable insights, track emerging trends, and make
          data-driven decisions with our comprehensive Data Analytics Dashboard.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaGithubSquare className="size={30}" color="white" />
          <FaTwitterSquare className="size={30}" color="white" />
          <FaDribbbleSquare className="size={30}" color="white" />
          <FaFacebookSquare className="size={30}" color="white" />
          <FaInstagram className="size={30}" color="white" />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6 mx-[-10]">
        <div>
          <h6 className="font-medium text-gray-400"> Solutions </h6>
          <ul className="text-white">
            <li className="py-2 text-sm"> Analytics</li>
            <li className="py-2 text-sm"> Marketing</li>
            <li className="py-2 text-sm"> Commerce</li>
            <li className="py-2 text-sm"> Insights </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400"> Support </h6>
          <ul className="text-white">
            <li className="py-2 text-sm"> Pricing</li>
            <li className="py-2 text-sm"> Documentation</li>
            <li className="py-2 text-sm"> Guides</li>
            <li className="py-2 text-sm"> API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400"> Company </h6>
          <ul className="text-white">
            <li className="py-2 text-sm"> About</li>
            <li className="py-2 text-sm"> Blog </li>
            <li className="py-2 text-sm"> Jobs </li>
            <li className="py-2 text-sm"> Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400"> Legal </h6>
          <ul className="text-white">
            <li className="py-2 text-sm"> Claim</li>
            <li className="py-2 text-sm"> Policy </li>
            <li className="py-2 text-sm"> Terms </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
