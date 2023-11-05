'use client'
import {sidebarLinks} from "@/constants";
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";

export default function LeftSidebar() {
    const pathname = usePathname();

    return (
        <nav className="h-screen overflow-y-auto bg-amber-500 pt-36 lg:w-[266px]">
            {sidebarLinks.map((item) => {
                const isActive = (pathname.includes(item.route) && item.route.length > 1) || pathname === item.route;

                return (
                    <Link
                        key={item.label}
                        href={item.route}
                        className="flex items-center justify-start gap-4 bg-transparent p-4"
                    >
                        <Image
                            src={item.imgURL}
                            alt={item.label}
                            width={20}
                            height={20}
                        />
                        <p>{item.label}</p>
                    </Link>
                )
            })}
        </nav>
    );
}
