"use client";
import {
    ArrowPathIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from "@heroicons/react/24/outline";

// Function to navigate to the previous page in the browsing history
const goBack = () => {
    window.history.back();
    console.log( window.history.length);
};

// Function to navigate to the next page in the browsing history
const goForward = () => {
    window.history.forward();
    console.log( window.history.state.index);
};

// Function to reload the current page
const reloadPage = () => {
    location.reload();
};

// initializes an array of objects (Buttons navigation)
const BtnList = [
    {
        icon: ChevronLeftIcon,
        function: goBack,
        title: "go to back page history",
    },
    {
        icon: ChevronRightIcon,
        function: goForward,
        title: "go to next page history",
    },
    { icon: ArrowPathIcon, function: reloadPage, title: "reload page" },
];
const BrowserControls = () => {
    return (
        <>
            {/* Use map to iterate over arrays of objects to render buttons navigation*/}
            {BtnList.map((btn) => {
                const BtnIcon = btn.icon;
                return (
                    <button
                        onClick={btn.function} // Call respective function on button click
                        key={btn.title} // Use title as a unique key
                        className="p-[10px] group hidden lg:block"
                        title={btn.title}
                    >
                        <BtnIcon className="w-5 h-5 text-[#7a7a7a] group-hover:text-[#0bce7f]" />
                    </button>
                );
            })}
        </>
    );
};

export default BrowserControls;
