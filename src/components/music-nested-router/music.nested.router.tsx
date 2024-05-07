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
                <h2 className="font-bold text-3xl pb-6">Music</h2>
                <nav className="text-lg flex gap-14">
                    <Link
                        href="/highlight"
                        className={clsx("hover:text-[#0bce7f]", {
                            "relative after:block after:absolute after:bottom-[-5px] after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-[#0bce7f] after:rounded-full":
                                ["/", "/highlight"].includes(firstPart),
                        })}
                    >
                        Highlight
                    </Link>
                    {linksNestedRouter.map((link) => {
                        return (
                            <Link
                                href={link.href}
                                className={clsx("hover:text-[#0bce7f]", {
                                    "relative after:block after:absolute after:bottom-[-5px] after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-[#0bce7f] after:rounded-full":
                                        firstPart === link.href,
                                })}
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
