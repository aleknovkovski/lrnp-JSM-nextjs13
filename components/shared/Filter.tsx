import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface Props {
  filters: {
    name: string,
    value: string,
  }[];
}

export default function Filter(props: Props) {
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme"/>
            </SelectTrigger>
            <SelectContent>
                {props.filters.map((filter)=> {
                    return (
                        <SelectItem key={filter.value} value={filter.value}>{filter.name}</SelectItem>
                    )
                })}
            </SelectContent>
        </Select>
    );
}
