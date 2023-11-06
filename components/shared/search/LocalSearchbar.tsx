import Image from 'next/image'
import {Input} from "@/components/ui/input";

interface Props {
    placeholderText: string
}

export default function LocalSearchbar(props: Props) {
    return (
       <div className="background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4">
       <Image
           src="/assets/icons/search.svg"
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
