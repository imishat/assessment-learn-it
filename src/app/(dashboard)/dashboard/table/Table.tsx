import { Button } from "@/components/ui/button";
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      no: 1,
      name: "1st Monthly",
      batch: "Karate Course 22041",
      date: "27th feb,2024",
      startTime: "10:00 am",
      endTime: "2:00 pm",
      teacher: <Button>Confirm</Button>,
    },
    {
      no: 2,
      name: "2nd Monthly",
      batch: "Karate Course 22041",
      date: "27th feb,2024",
      startTime: "10:00 am",
      endTime: "2:00 pm",
      teacher: <Button>Confirm</Button>,
    },
    {
      no: 3,
      name: "3rd Monthly",
      batch: "Karate Course 22041",
      date: "27th feb,2024",
      startTime: "10:00 am",
      endTime: "2:00 pm",
      teacher: <Button>Confirm</Button>,
    },
  ];
}

export default async function ShowTable() {
  const data = await getData();

  return (
    <div className="w-full py-5">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
