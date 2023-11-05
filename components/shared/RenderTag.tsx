import Link from "next/link";
import {Badge} from "../ui/badge";

interface Props {
    name: string;
}

export default function RenderTag(props: Props) {
    return (
        <Link href={`/tags/${props.name}`}>
            <Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
                {props.name}
            </Badge>
        </Link>
    );
}
