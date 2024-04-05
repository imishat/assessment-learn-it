"use client";

import Ellipse from "../../../../../public/images/Ellipse 16.png";
import Image from "next/image";
import Dropdown from "./components/Dropdown";

export default function StudentCard() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="w-[400px] shadowBox">
        <div className="bg-bgOne bg-no-repeat bg-center bg-cover py-4  rounded-t-[20px] w-full ">
          <div className="flex justify-center items-center">
            <Image src={Ellipse} alt="" />
          </div>
        </div>

        <div className="p-4">
          <div className="flex justify-between">
            <div>
              <p className="font-normal text-sm text-black/80 mb-4">
                Student Name :
              </p>
              <p className="font-normal text-sm text-black/80 mb-4">
                Roll No :
              </p>
              <p className="font-normal text-sm text-black/80 mb-4">Course:</p>
              <p className="font-normal text-sm text-black/80 mb-4">Batch:</p>
              <p className="font-normal text-sm text-black/80 mb-4">Trainer:</p>
              <p className="font-normal text-sm text-black/80 mb-4">Result :</p>
            </div>
            <div>
              <p className="font-normal text-sm text-black/80 mb-4">
                <Dropdown />
              </p>
              <p className="font-normal text-sm text-black/80 mb-4"><Dropdown/></p>
              <p className="font-normal text-sm text-black/80 mb-4">
                SHITO-RYU KARATE White Belt
              </p>
              <p className="font-normal text-sm text-black/80 mb-4">
                Karate Course 22041
              </p>
              <p className="font-normal text-sm text-black/80 mb-4">
                Adil Rashid
              </p>
              <p className="font-normal text-sm text-black/80 mb-4">70(Pass)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
