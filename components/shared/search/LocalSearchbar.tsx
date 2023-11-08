import Image from 'next/image'
import {Input} from "@/components/ui/input";

interface Props {
    imgSrc: string;
    additionalClasses?: string;
    placeholderText: string;
    route: string;
    iconPosition: string;
}

function iconMarkup(imgSrc: string) {
    return (
        <Image
           src={imgSrc}
           alt="search"
           width={24}
           height={24}
           className="cursor-pointer"
       />
    )
}

export default function LocalSearchbar(props: Props) {
    return (
       <div className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${props.additionalClasses}`}>

       {props.iconPosition === "left" && iconMarkup(props.imgSrc)}

       <Input
           type="text"
           placeholder={props.placeholderText}
           defaultValue=""
           className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
       />

       {props.iconPosition === "right" && iconMarkup(props.imgSrc)}

       </div>
    );
}
