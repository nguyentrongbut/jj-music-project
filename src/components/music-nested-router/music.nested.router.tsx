import Link from "next/link";

const MusicNestedRouter = () => {
    return (
        <>
            <div className="px-[10px]">
                <h2 className="font-bold text-3xl pb-6">Music</h2>
                <nav className="text-lg flex gap-14">
                    <Link
                        href="/highlight"
                        className="hover:text-[#0bce7f] relative after:block after:absolute after:bottom-[-5px] after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-[#0bce7f] after:rounded-full"
                    >
                        Highlight
                    </Link>

                    <Link
                        href="/playlist"
                        className="hover:text-[#0bce7f] relative after:block after:absolute after:bottom-[-5px] after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-[#0bce7f] after:rounded-full"
                    >
                        Playlist
                    </Link>
                    <Link
                        href="/singer"
                        className="hover:text-[#0bce7f] relative after:block after:absolute after:bottom-[-5px] after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-[#0bce7f] after:rounded-full"
                    >
                        Singer
                    </Link>
                    <Link
                        href="/top-music"
                        className="hover:text-[#0bce7f] relative after:block after:absolute after:bottom-[-5px] after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-[#0bce7f] after:rounded-full"
                    >
                        Top 100
                    </Link>
                    <Link
                        href="/album"
                        className="hover:text-[#0bce7f] relative after:block after:absolute after:bottom-[-5px] after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-[#0bce7f] after:rounded-full"
                    >
                        Album
                    </Link>
                </nav>
            </div>
        </>
    );
};

export default MusicNestedRouter;
