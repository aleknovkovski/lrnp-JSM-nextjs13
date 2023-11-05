import Link from "next/link";
import {Badge} from "../ui/badge";

interface Props {
    _id: number;
    name: string;
    totalQuestions?: number;
}

export default function RenderTag(props: Props) {
    return (
        <Link href={`/tags/${props._id}`}>
            <Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
                {props.name}
            </Badge>

            <p className="small-medium text-dark500_light700">{props.totalQuestions}</p>
        </Link>
    );
}
