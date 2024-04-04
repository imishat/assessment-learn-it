"use client";
import Image from "next/image";
import logo from "../../../../../public/logo/assessment-logo 3.png";
import profile from "../../../../../public/logo/profile.png";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function Navbar() {
  const [hidden, setHidden] = useState(true);

  return (
    <nav className="bg-primary">
      <div className="w-full flex pt-1 items-center justify-between md:justify-around text-[#F6F6F6] px-5 md:px-0">
        <div>
          <Image
            src={logo}
            alt="logo Image"
            className="w-20 md:w-full lg:w-[191px]"
          />
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center justify-center gap-4 text-base">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>COURSES</li>
            <li>EVENTS</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className="hidden md:flex items-center gap-10">
          <div className="bg-secondary p-[13px] rounded-full">
            <FaSearch />
          </div>
          <div>
            <Image src={profile} alt="profile" width={48} height={48} />
          </div>
        </div>
        <div className="block md:hidden" onClick={() => setHidden(!hidden)}>
          <GiHamburgerMenu className="w-8 h-8" />
        </div>
      </div>
      <div
        className={`${
          hidden ? "h-0 overflow-hidden" : "h-[170px] overflow-auto"
        } transition-all duration-300`}
      >
        <ul className="text-white mt-2 space-y-2 ml-5">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>COURSES</li>
          <li>EVENTS</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div>
        <h1 className="text-[#FFB606] pb-4 text-2xl md:text-4xl font-semibold leading-[54px] text-center">
          TEACHERS PROFILE
        </h1>
      </div>
    </nav>
  );
}
