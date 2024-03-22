"use client";
import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { UserButton } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { headerButtons } from "@/data";

const Nav = () => {
  return (
    <div className="fixed top-0 left-0 right-0 opacity-85 z-10 ">
      <div className="flex justify-between items-center bg-gray-50 px-5 py-3 shadow-sm mx-auto border-b-[1px]">
        <motion.a whileHover={{ scale: 1.05 }} href="#home">
          <Image
            src={logo}
            alt="logo"
            height={90}
            width={90}
            className="cursor-pointer"
          />
        </motion.a>
        <div className="flex items-center gap-20">
          <div className="flex items-center gap-5">
            {headerButtons.map((button) => (
              <a
                href={button.link}
                key={button.name}
                className="rounded-full cursor-pointer font-semibold text-blue-600
          transition hover:text-white px-3 py-2 hover:bg-blue-500 text-nowrap"
              >
                {button.name}
              </a>
            ))}
          </div>
          <UserButton />
        </div>
      </div>
    </div>
  );
};

export default Nav;
