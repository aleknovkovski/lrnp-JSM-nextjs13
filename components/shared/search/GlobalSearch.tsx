import Image from 'next/image'
import {Input} from "@/components/ui/input";

export default function GlobalSearch() {
    return (
       <div>
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
