import React, { ReactNode } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "../(dashboard)/components/Sidebar/Sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="w-full lg:w-[1440px] mx-auto bg-[#F6F6F6]">
      <Navbar />
      <div className="flex mt-8 mx-[50px] gap-12">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
