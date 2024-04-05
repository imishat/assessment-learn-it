"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  no: number;
  categoryName: string;
  fullMarks: string;
  studentMark: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "no",
    header: "No",
  },
  {
    accessorKey: "categoryName",
    header: "Category Name",
  },
  {
    accessorKey: "fullMarks",
    header: "Full Marks",
  },
  {
    accessorKey: "studentMark",
    header: "Student Mark",
  },
];
