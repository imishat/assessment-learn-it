import Navbar from "./Navber/Navber";
import Sidebar from "./sidebar/Sidebar";


export default function dashboardLayout({ children }: any) {
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
