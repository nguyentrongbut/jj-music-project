"use client";
import {
    AdjustmentsHorizontalIcon,
    HeartIcon,
    MusicalNoteIcon,
    StarIcon,
    VideoCameraIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// initializes an links objects (Online music)
const linksOnlineMusic = [
    { name: "Recommend", href: "/", icon: StarIcon },
    { name: "Music", href: "/music", icon: MusicalNoteIcon },
    { name: "Video", href: "/video", icon: VideoCameraIcon },
];

// initializes an links object (My music)
const linksMyMusic = [
    { name: "Like", href: "/like", icon: HeartIcon },
    { name: "Playlist", href: "/playlist", icon: AdjustmentsHorizontalIcon },
];
const SideBar = () => {
    const pathname = usePathname(); // Get the current router link
    return (
        <aside className="sm:w-[204px] fixed sm:top-0 bottom-0 left-0 right-0 bg-white sm:bg-[#f0f0f0] sm:pt-4 px-[19px]">
            {/* Logo */}
            <Link key="jj-music" href="/" className="hidden sm:block">
                <Image
                    className="ml-[14px]"
                    width={100}
                    height={28}
                    src="https://y.qq.com/mediastyle/yqq/img/logo.png?max_age=2592000"
                    alt="jj music"
                />
            </Link>

            {/* nav */}
            <nav className="sm:mt-10 flex sm:block">
                {/* Online music */}
                <ul className="flex sm:block justify-between w-full">
                    <li className="ml-2 mb-[10px] px-3 py-[5px] text-[#787878] hidden sm:block">
                        Online Music
                    </li>

                    {/* Use map to iterate over arrays of objects to render links*/}
                    {linksOnlineMusic.map((link) => {
                        const LinkIcon = link.icon; // Extracting the icon component from the link object
                        return (
                            <Link
                                key={link.name} // Use name as a unique key
                                href={link.href}
                                className={clsx(
                                    "flex flex-col sm:flex-row gap-2 px-3 py-[20px] sm:py-[5px] items-center rounded-sm sm:mb-[10px] sm:hover:bg-[#d9d9d9] sm:font-bold",
                                    {
                                        "sm:bg-gradient-to-l sm:from-[#0bce7f] sm:to-[#1dd3aa] text-[#0bce7f] sm:text-white":
                                            pathname === link.href, // If the current router link is equal to this router link, this css will be added
                                    }
                                )}
                            >
                                <LinkIcon className="h-6 w-6 text-[2b2b2b] max-[600px]:w-8 max-[600px]:h-8" />
                                <p className="max-[600px]:hidden">
                                    {link.name}
                                </p>
                            </Link>
                        );
                    })}

                    {/* My music */}
                    <li className="sm:mt-8 ml-2 mb-[10px] px-3 py-[5px] text-[#787878] hidden sm:block">
                        My Music
                    </li>

                    {/* Use map to iterate over arrays of objects to render links*/}
                    {linksMyMusic.map((link) => {
                        const LinkIcon = link.icon; // Extracting the icon component from the link object
                        return (
                            <Link
                                key={link.name} // Use name as a unique key
                                href={link.href}
                                className={clsx(
                                    "flex flex-col sm:flex-row gap-2 px-3 py-[20px] sm:py-[5px] items-center rounded-sm sm:mb-[10px] sm:hover:bg-[#d9d9d9] sm:font-bold",
                                    {
                                        "sm:bg-gradient-to-l sm:from-[#0bce7f] sm:to-[#1dd3aa] text-[#0bce7f] sm:text-white":
                                            pathname === link.href, // If the current router link is equal to this router link, this css will be added
                                    }
                                )}
                            >
                                <LinkIcon className="h-6 w-6 text-[2b2b2b] max-[600px]:w-8 max-[600px]:h-8" />
                                <p className="max-[600px]:hidden">
                                    {link.name}
                                </p>
                            </Link>
                        );
                    })}
                </ul>
            </nav>
        </aside>
    );
};

export default SideBar;
