import {
    AdjustmentsHorizontalIcon,
    HeartIcon,
    MusicalNoteIcon,
    RadioIcon,
    StarIcon,
    VideoCameraIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const SideBar = () => {
    return (
        <aside className="w-[204px] fixed top-0 bottom-0 left-0 bg-[#f0f0f0] pt-4 px-[19px]">
            {/* Logo */}
            <Image
                className="ml-[14px]"
                width={100}
                height={28}
                src="https://y.qq.com/mediastyle/yqq/img/logo.png?max_age=2592000"
                alt="jj music"
            />

            {/* nav */}
            <nav className="mt-10">
                {/* Online music */}
                <ul>
                    <li className="ml-2 mb-[10px] px-3 py-[5px]">
                        Online Music
                    </li>

                    {/* Recommend */}
                    <li>
                        <Link
                            href="/"
                            className="flex gap-2 px-3 py-[5px] items-center bg-gradient-to-l from-[#0bce7f] to-[#1dd3aa] rounded-sm mb-[10px] hover:bg-[#d9d9d9]"
                        >
                            <StarIcon className="h-6 w-6 text-[2b2b2b]" />
                            <span>Recommend</span>
                        </Link>
                    </li>

                    {/* Music */}
                    <li>
                        <Link
                            href="/music"
                            className="flex gap-2 px-3 py-[5px] items-center rounded-sm mb-[10px] hover:bg-[#d9d9d9]"
                        >
                            <MusicalNoteIcon className="h-6 w-6 text-[2b2b2b]" />
                            <span>Music</span>
                        </Link>
                    </li>

                    {/* Video */}
                    <li>
                        <Link
                            href="/video"
                            className="flex gap-2 px-3 py-[5px] items-center rounded-sm mb-[10px] hover:bg-[#d9d9d9]"
                        >
                            <VideoCameraIcon className="h-6 w-6 text-[2b2b2b]" />
                            <span>Video</span>
                        </Link>
                    </li>

                    {/* Radio */}
                    <li>
                        <Link
                            href="/radio"
                            className="flex gap-2 px-3 py-[5px] items-center rounded-sm mb-[10px] hover:bg-[#d9d9d9]"
                        >
                            <RadioIcon className="h-6 w-6 text-[2b2b2b]" />
                            <span>Radio</span>
                        </Link>
                    </li>
                </ul>

                {/* My music */}
                <ul className="mt-8">
                    <li className="ml-2 mb-[10px] px-3 py-[5px]">My Music</li>

                    {/* Like */}
                    <li>
                        <Link
                            href="/like"
                            className="flex gap-2 px-3 py-[5px] items-center rounded-sm mb-[10px] hover:bg-[#d9d9d9]"
                        >
                            <HeartIcon className="h-6 w-6 text-[2b2b2b]" />
                            <span>Like</span>
                        </Link>
                    </li>

                    {/* My Playlist */}
                    <li>
                        <Link
                            href="/playlist"
                            className="flex gap-2 px-3 py-[5px] items-center rounded-sm mb-[10px] hover:bg-[#d9d9d9]"
                        >
                            <AdjustmentsHorizontalIcon className="h-6 w-6 text-[2b2b2b]" />
                            <span>My Playlist</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default SideBar;
