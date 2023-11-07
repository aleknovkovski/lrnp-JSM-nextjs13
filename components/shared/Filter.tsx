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
  containerClasses?: string;
  additionalClasses?: string;
}

export default function Filter(props: Props) {
    return (
        <div className={`relative ${props.containerClasses}`}>
        <Select>
            <SelectTrigger className={`${props.additionalClasses} body-regular light-border background-light800_dark300 text-dark500_light700 border px-5 py-2.5`}>
                <div className="line-clamp-1 flex-1 text-left">
                    <SelectValue placeholder="Select a Filter" />
                </div>
            </SelectTrigger>
            <SelectContent>
                {props.filters.map((filter)=> {
                    return (
                        <SelectItem key={filter.value} value={filter.value}>{filter.name}</SelectItem>
                    )
                })}
            </SelectContent>
        </Select>
        </div>
    );
}
