import Image from 'next/image'
import {Input} from "@/components/ui/input";

interface Props {
    imgSrc: string;
    additionalClasses?: string;
    placeholderText: string
}

export default function LocalSearchbar(props: Props) {
    return (
       <div className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${props.additionalClasses}`}>
       <Image
           src={props.imgSrc}
           alt="search"
           width={24}
           height={24}
           className="cursor-pointer"
       />
       <Input
           type="text"
           placeholder={props.placeholderText}
           value=""
           className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
       />
       </div>
    );
}
