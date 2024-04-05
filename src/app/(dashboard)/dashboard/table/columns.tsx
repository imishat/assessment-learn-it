"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  no: number;
  name: string;
  batch: string;
  date: string;
  startTime: string;
  endTime: string;
  teacher: any;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "no",
    header: "No",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "batch",
    header: "Batch",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "startTime",
    header: "Start Time",
  },
  {
    accessorKey: "endTime",
    header: "End Time",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;

      return (
        //action button
        <>
          <Button>Confirm</Button>
        </>
      );
    },
    header: "Teacher",
  },
];
