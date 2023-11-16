import parse from 'html-react-parser'

interface Props {
 data: string;
}

const ParseHTML = ({ data }: Props) => {

 return (
   <div>
     {parse(data)}
   </div>
 )
}

export default ParseHTML