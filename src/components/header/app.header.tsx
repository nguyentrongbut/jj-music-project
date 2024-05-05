import AvatarGroup from "@/components/header/header-feature/avatar.group";
import BrowserControls from "@/components/header/header-feature/browser.controls";
import Search from "@/components/header/header-feature/search";

const AppHeader = () => {
    return (
        <header className="flex justify-between sm:ml-10 sm:mb-8 sm:pt-3">
            <div className="flex items-center">
                <BrowserControls />
                <Search />
            </div>
            <AvatarGroup />
        </header>
    );
};

export default AppHeader;
