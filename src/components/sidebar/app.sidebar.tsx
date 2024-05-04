"use client";
import {
    AdjustmentsHorizontalIcon,
    HeartIcon,
    MusicalNoteIcon,
    RadioIcon,
    StarIcon,
    VideoCameraIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// initializes an array of objects (Online music)
const linksOnlineMusic = [
    { name: "Recommend", href: "/", icon: StarIcon },
    { name: "Music", href: "/music", icon: MusicalNoteIcon },
    { name: "Video", href: "/video", icon: VideoCameraIcon },
    { name: "Radio", href: "/radio", icon: RadioIcon },
];

// initializes an array of objects (My music)
const linksMyMusic = [
    {name: "Like", href: "/like", icon: HeartIcon},
    {name: "Playlist", href: "/playlist", icon: AdjustmentsHorizontalIcon},
]
const SideBar = () => {
    const pathname = usePathname(); // Get the current router link
    return (
        <aside className="w-[204px] fixed top-0 bottom-0 left-0 bg-[#f0f0f0] pt-4 px-[19px]">
            {/* Logo */}
            <Link key="jj-music" href="/">
                <Image
                    className="ml-[14px]"
                    width={100}
                    height={28}
                    src="https://y.qq.com/mediastyle/yqq/img/logo.png?max_age=2592000"
                    alt="jj music"
                />
            </Link>

            {/* nav */}
            <nav className="mt-10">
                {/* Online music */}
                <ul>
                    <li className="ml-2 mb-[10px] px-3 py-[5px]">
                        Online Music
                    </li>

                    {/* Use map to iterate over arrays of objects to render links*/}
                    {linksOnlineMusic.map((link) => {
                        const LinkIcon = link.icon;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={clsx(
                                    "flex gap-2 px-3 py-[5px] items-center rounded-sm mb-[10px] hover:bg-[#d9d9d9]",
                                    {
                                        "bg-gradient-to-l from-[#0bce7f] to-[#1dd3aa] ":
                                            pathname === link.href, // If the current router link is equal to this router link, this css will be added                            
                                    }
                                )}
                            >
                                <LinkIcon className="h-6 w-6 text-[2b2b2b]" />
                                <p>{link.name}</p>
                            </Link>
                        );
                    })}
                </ul>

                {/* My music */}
                <ul className="mt-8">
                    <li className="ml-2 mb-[10px] px-3 py-[5px]">My Music</li>

                    {/* Use map to iterate over arrays of objects to render links*/}
                    {linksMyMusic.map((link) => {
                        const LinkIcon = link.icon;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={clsx(
                                    "flex gap-2 px-3 py-[5px] items-center rounded-sm mb-[10px] hover:bg-[#d9d9d9]",
                                    {
                                        "bg-gradient-to-l from-[#0bce7f] to-[#1dd3aa] ":
                                            pathname === link.href, // If the current router link is equal to this router link, this css will be added
                                    }
                                )}
                            >
                                <LinkIcon className="h-6 w-6 text-[2b2b2b]" />
                                <p>{link.name}</p>
                            </Link>
                        );
                    })}
                </ul>
            </nav>
        </aside>
    );
};

export default SideBar;
