"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const linksNestedRouter = [
    { name: "Playlist", href: "/playlist" },
    { name: "Singer", href: "/singer" },
    { name: "Top 100", href: "/top-music" },
    { name: "Album", href: "/album" },
];
//hover:text-[#0bce7f]
const MusicNestedRouter = () => {
    const pathname = usePathname(); // Get the current router link
    const parts = pathname.split("/");
    const firstPart = "/" + parts[1];
    return (
        <>
            <div className="px-[10px]">
                <h2 className="font-bold text-3xl pb-6 hidden lg:block">
                    Music
                </h2>
                <nav className="text-lg flex xl:gap-14 lg:gap-10 md:gap-6 gap-5 mt-5 sm:mt-0 max-[426px]:justify-normal justify-center sm:justify-normal overflow-style overflow-style::-webkit-scrollbar">
                    <Link
                        href="/highlight"
                        className={clsx("hover:text-[#0bce7f] pb-1 sm:pb-0", {
                            "relative after:block after:absolute sm:after:bottom-[-5px] after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-[#0bce7f] after:rounded-full":
                                ["/", "/highlight"].includes(firstPart),
                        })}
                    >
                        Highlight
                    </Link>
                    {linksNestedRouter.map((link) => {
                        return (
                            <Link
                                href={link.href}
                                className={clsx(
                                    "hover:text-[#0bce7f] flex-shrink-0 pb-1 sm:pb-0",
                                    {
                                        "relative after:block after:absolute sm:after:bottom-[-5px] after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-[#0bce7f] after:rounded-full":
                                            firstPart === link.href,
                                    }
                                )}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </>
    );
};

export default MusicNestedRouter;
