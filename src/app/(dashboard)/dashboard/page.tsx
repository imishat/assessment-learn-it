import Image from "next/image";
import img1 from "../../../../public/images/Frame 873.png";
import img2 from "../../../../public/images/Group 160.png";
import polygon from "../../../../public/images/Polygon 1.png";
import Search from "./search/Search";
import ShowTable from "./table/Table";
import StudentCard from "./students/StudentCard";
import SubjectTable from "./students/subjectTable/SubjectTable";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { MdCancel } from "react-icons/md";
import { FaChevronCircleRight } from "react-icons/fa";

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
        <Search />
        <ShowTable />
      </div>
      <div className="flex gap-10 mt-10">
        <StudentCard />
        <div className="bg-white rounded-[25px]">
          <SubjectTable />
          <p className="text-right mr-10 my-10">
            Total marks out of 100 is:
            <span className="text-orange-800"> 70</span>
          </p>
          <div className="flex gap-3 items-center justify-end pr-10 pb-10">
            <AlertDialog>
              <AlertDialogTrigger>
                <Button variant="secondary">Confirm</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-[#26235B] w-[480px] h-[320px] border-none">
                <AlertDialogCancel className="py-0 my-0 absolute top-3 right-0">
                  <MdCancel size={40} className="text-white" />
                </AlertDialogCancel>
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-center mb-[60px] text-white">
                    Congratualtions
                  </AlertDialogTitle>
                  <AlertDialogDescription className="text-center  text-white">
                    Your Student Nome: Amir Roll No: KC1122334
                  </AlertDialogDescription>
                  <AlertDialogDescription className="text-center pt-4 text-white">
                    Achieve 70 Out of 100
                  </AlertDialogDescription>
                  <AlertDialogDescription className="text-center pt-4 text-white">
                    Pass
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <Button variant="secondary" className="mx-auto">
                    Continue
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <Button variant="ghost" className="flex gap-2 items-center">
              All Result <FaChevronCircleRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
