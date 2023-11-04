import Image from "next/image";
import {
    Sheet,
    SheetContent,
    SheetClose,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";

export default function MobileNav() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Image
                    src="/assets/icons/hamburger.svg"
                    width={36}
                    height={36}
                    alt="Menu"
                    className="invert-colors sm:hidden"
                />
            </SheetTrigger>
            <SheetContent side="left" className="background-light900_dark200 border-none">
                <Link href="/" className="flex items-center gap-1">
                    <Image
                        src="/assets/images/site-logo.svg"
                        width={23}
                        height={23}
                        alt="DevFlow"
                    />

                    <p className="h2-bold text-dark100_light900 font-spaceGrotesk">Dev <span
                        className="text-primary-500">Overflow</span></p>
                </Link>
                <div>
                    <SheetClose>
                        NavContent
                    </SheetClose>
                </div>
            </SheetContent>
        </Sheet>
    );
}
