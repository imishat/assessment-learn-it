import Image from "next/image";
import img1 from "@/public/images/Frame 873.png";
import img2 from "@/public/images/Group 160.png";
import polygon from "@/public/images/Polygon 1.png";


export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl text-left uppercase text-[#26235B]">
        Exam & Grading
      </h1>
      <div className="relative h-20 mt-6">
        <div className="hidden lg:block w-full h-1 bg-[#E9E9EF] absolute top-6 left-0"></div>
        <ul className="flex flex-wrap items-center gap-[60px] relative z-10">
          <li className="relative">
            <Image src={img1} alt="icon" />
            <Image
              src={polygon}
              alt="Polygon"
              className="absolute right-4 top-14"
            />
          </li>
          <li>
            <Image src={img1} alt="icon" />
          </li>
          <li>
            <Image src={img2} alt="icon" />
          </li>
          <li>
            <Image src={img1} alt="icon" />
          </li>
          <li>
            <Image src={img2} alt="icon" />
          </li>
          <li>
            <Image src={img1} alt="icon" />
          </li>
          <li>
            <Image src={img2} alt="icon" />
          </li>
          <li>
            <Image src={img2} alt="icon" />
          </li>
          <li>
            <Image src={img2} alt="icon" />
          </li>
          <li>
            <Image src={img1} alt="icon" />
          </li>
        </ul>
      </div>
      <div className="bg-white p-5 rounded-[25px]">
        
      </div>

      <div>
      
      </div>
    </div>
  );
}
