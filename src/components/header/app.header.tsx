import AvatarGroup from "@/components/header/header-feature/avatar.group";
import BrowserControls from "@/components/header/header-feature/browser.controls";
import Search from "@/components/header/header-feature/search";

const AppHeader = () => {
    return (
        <header className="flex justify-between sm:mb-8 sm:pt-3 items-center pt-4 px-4">
            <div className="flex items-center w-full md:w-auto">
                <BrowserControls />
                <Search />
            </div>
            <AvatarGroup />
        </header>
    );
};

export default AppHeader;
