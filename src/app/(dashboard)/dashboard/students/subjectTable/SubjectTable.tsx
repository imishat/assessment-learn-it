import { Button } from "@/components/ui/button";
import { Payment, columns } from "./colum";
import { DataTable } from "./DataTable";

async function subData(): Promise<Payment[]> {
  return [
    {
      no: 1,
      categoryName: "Straching",
      fullMarks: "5",
      studentMark: "3",
    },
    {
      no: 2,
      categoryName: "Uchi",
      fullMarks: "5",
      studentMark: "3",
    },
    {
      no: 3,
      categoryName: "Uchi",
      fullMarks: "5",
      studentMark: "3",
    },
    {
      no: 4,
      categoryName: "Uchi",
      fullMarks: "5",
      studentMark: "3",
    },
    {
      no: 5,
      categoryName: "Uchi",
      fullMarks: "5",
      studentMark: "3",
    },
    {
      no: 6,
      categoryName: "Uchi",
      fullMarks: "5",
      studentMark: "3",
    },
    {
      no: 7,
      categoryName: "Uchi",
      fullMarks: "5",
      studentMark: "3",
    },
    {
      no: 8,
      categoryName: "Uchi",
      fullMarks: "5",
      studentMark: "3",
    },
    {
      no: 9,
      categoryName: "Uchi",
      fullMarks: "5",
      studentMark: "3",
    },
    {
      no: 10,
      categoryName: "Uchi",
      fullMarks: "5",
      studentMark: "3",
    },
    {
      no: 11,
      categoryName: "Uchi",
      fullMarks: "5",
      studentMark: "3",
    },
    {
      no: 12,
      categoryName: "Uchi",
      fullMarks: "5",
      studentMark: "3",
    },
    {
      no: 13,
      categoryName: "Uchi",
      fullMarks: "5",
      studentMark: "3",
    },
    {
      no: 14,
      categoryName: "Uchi",
      fullMarks: "5",
      studentMark: "3",
    },
  ];
}

export default async function SubjectTable() {
  const data = await subData();

  return (
    <div className="w-full">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
