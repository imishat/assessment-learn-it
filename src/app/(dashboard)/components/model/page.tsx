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
  import { Button } from "@/components/ui/button";
  import { MdCancel } from "react-icons/md";
  
  export default function Model() {
    return (
      <AlertDialog>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
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
    );
  }
  