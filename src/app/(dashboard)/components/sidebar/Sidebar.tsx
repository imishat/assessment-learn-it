import profile from "../../../../../public/logo/profile.png";
import Image from "next/image";
import Link from "next/link";
import {
  FaFileAlt,
  FaHandHolding,
  FaSignOutAlt,
  FaUserAlt,
} from "react-icons/fa";
import { FaLaptopFile } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { MdNotificationsActive } from "react-icons/md";
import { PiExamFill, PiStudentBold } from "react-icons/pi";

export default function Sidebar() {
  return (
    <div className="w-[250px] bg-[#FEFEFE] rounded-[25px] py-6">
      <div>
        <div className="border-4 border-[#8280A0] rounded-full w-[206.92px] h-[206.92px] mx-auto flex items-center justify-center">
          <div className="border-4 border-[#DEDEE6] rounded-full w-[194.92px] h-[194.92px] flex items-center justify-center">
            <div className="border-4 border-[#BCBBCC] rounded-full w-[182.92px] h-[182.92px] flex items-center justify-center">
              <Image
                src={profile}
                alt="Profile Image"
                className="w-[170.92px] h-[170.92px] rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="my-6 text-center space-y-4">
          <h5 className="text-[#161616] font-normal">MOjahid</h5>
          <p className="text-[#565656]">Front-End Developer</p>
        </div>
        <div>
          <ul className="text-[#565656] space-y-1">
            <Link
              href="/dashboard"
              className="p-3 bg-[#E9E9EF] flex items-center gap-4 hover:bg-primary hover:text-white transition-colors duration-150"
            >
              <FaHandHolding className="w-8" /> Karate Course
            </Link>
            <Link
              href="/dashboard"
              className="p-3 bg-[#E9E9EF] flex items-center gap-4 hover:bg-primary hover:text-white transition-colors duration-150"
            >
              <FaLaptopFile /> Online Karate Course
            </Link>
            <Link
              href="/dashboard"
              className="p-3 bg-[#E9E9EF] flex items-center gap-4 hover:bg-primary hover:text-white transition-colors duration-150"
            >
              <PiStudentBold /> Students
            </Link>
            <Link
              href="/dashboard"
              className="p-3 bg-[#E9E9EF] flex items-center gap-4 hover:bg-primary hover:text-white transition-colors duration-150"
            >
              <FaFileAlt /> Attendance
            </Link>
            <Link
              href="/dashboard"
              className="p-3 bg-[#E9E9EF] flex items-center gap-4 hover:bg-primary hover:text-white transition-colors duration-150"
            >
              <PiExamFill /> Exam & Grading
            </Link>
            <Link
              href="/dashboard"
              className="p-3 bg-[#E9E9EF] flex items-center gap-4 hover:bg-primary hover:text-white transition-colors duration-150"
            >
              <MdNotificationsActive /> Notification
            </Link>
            <Link
              href="/dashboard"
              className="p-3 bg-[#E9E9EF] flex items-center gap-4 hover:bg-primary hover:text-white transition-colors duration-150"
            >
              <FaUserAlt /> My Profile
            </Link>
            <Link
              href="/dashboard"
              className="p-3 bg-[#E9E9EF] flex items-center gap-4 hover:bg-primary hover:text-white transition-colors duration-150"
            >
              <IoMdSettings /> Setting
            </Link>
            <Link
              href="/dashboard"
              className="p-3 bg-[#E9E9EF] flex items-center gap-4 hover:bg-primary hover:text-white transition-colors duration-150"
            >
              <FaSignOutAlt /> Sign Out
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
