interface Props {
  name: string;
}

export default function RenderTag(props: Props) {
    return (
        <p>{props.name}</p>
    );
}
