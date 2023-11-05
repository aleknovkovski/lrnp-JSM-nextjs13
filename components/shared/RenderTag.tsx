import Link from "next/link";
import { Badge } from "../ui/badge";

interface Props {
  name: string;
}

export default function RenderTag(props: Props) {
    return (
        <Link href={`/tags/${props.name}`}>
        <Badge variant="outline">
            {props.name}
        </Badge>
        </Link>
    );
}
