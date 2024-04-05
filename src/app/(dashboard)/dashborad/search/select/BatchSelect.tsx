import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  
  export function BatchSelect() {
    return (
      <Select>
        <SelectTrigger className="w-[180px] rounded-full">
          <SelectValue placeholder="Offline Course" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>online</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  }
  