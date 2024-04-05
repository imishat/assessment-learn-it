import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CourseSelect } from "./select/CourseSelect";
import { BatchSelect } from "./select/BatchSelect";

export default function Search() {
  return (
    <div className="flex items-center gap-6 justify-end">
      <Input />
      <CourseSelect />
      <BatchSelect />
    </div>
  );
}
