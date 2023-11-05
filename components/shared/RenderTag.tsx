import { Badge } from "../ui/badge";

interface Props {
  name: string;
}

export default function RenderTag(props: Props) {
    return (
        <Badge variant="outline">
            {props.name}
        </Badge>
    );
}
