import Image from 'next/image'
import {Input} from "@/components/ui/input";

export default function GlobalSearch() {
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
           placeholder="Search globally"
           value=""
       />
       </div>
    );
}
