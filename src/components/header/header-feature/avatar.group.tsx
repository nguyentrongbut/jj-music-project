import { FireIcon } from "@heroicons/react/20/solid";
import { PowerIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const AvatarGroup = () => {
    return (
        <>
            <div className="ml-2 md:ml-0">
                <div className="flex gap-1 sm:gap-2 items-center">
                    <Image
                        src="https://qpic.y.qq.com/music_cover/t1gG7op0rLpWLKl8T9PNiaEUzqL4B12kFtZibWyqT7KAskqmickpvnoHg/600?n=1"
                        alt="avatar"
                        width={24}
                        height={24}
                        className="rounded-full object-cover flex-shrink-0"
                    ></Image>
                    <span className="cursor-pointer hidden md:block">
                        Sign in/ Sign up
                    </span>
                    <button className="md:p-2" title="VIP">
                        <FireIcon className="w-5 h-5 cursor-pointer hidden md:block" />
                    </button>
                    <button className="p-1 md:p-2">
                        <PowerIcon
                            className="w-5 h-5 cursor-pointer"
                            title="logout"
                        />
                    </button>
                </div>
            </div>
        </>
    );
};

export default AvatarGroup;
