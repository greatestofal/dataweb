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
    </div>
  );
};

export default Footer;
