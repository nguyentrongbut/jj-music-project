"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

const Search = () => {
    const [isClick, setIsClick] = useState(false); // State to track the click state
    const [inputValue, setInputValue] = useState("");
    const formRef = useRef(null); // Reference to the form element

    const handleClick = () => {
        setIsClick(true); // Set isClick to true when input is clicked
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // ** MouseEvent là một kiểu dữ liệu được định nghĩa sẵn để đại diện cho sự kiện chuột. Đối với các ứng dụng React, MouseEvent thường được sử dụng để xử lý các sự kiện chuột như click, double click, hover, mouseover, mouseout, và các sự kiện khác. **
            // Function to handle click event outside the form
            //@ts-ignore
            if (formRef.current && !formRef.current.contains(event.target)) {
                // Check if click happens outside the form
                setIsClick(false); // If so, set isClick to false
            }
        };

        document.addEventListener("click", handleClickOutside); // Add click event listener to document

        return () => {
            document.removeEventListener("click", handleClickOutside); // Remove click event listener when component unmounts
        };
    }, []); // useEffect runs only once when the component is created

    return (
            <form
                ref={formRef} // Use useRef to create a reference to the form element
                className="relative bg-[#e0e0e0]  rounded-full w-full"
            >
                <input
                    type="text"
                    name=""
                    id=""
                    className="outline-none bg-[#e0e0e0] h-full py-2 px-4 rounded-full text-sm md:w-[250px] lg:w-[350px]"
                    onClick={handleClick} // Call handleClick when input is clicked
                />
                {/* Hide search button when not clicked */}
                <div
                    className={clsx(
                        "absolute top-1/2 -translate-y-1/2 left-5 flex gap-2 text-[#aaaaaa] pointer-events-none",
                        { hidden: isClick } // Hide here
                    )}
                >
                    <button>
                        <MagnifyingGlassIcon className="w-4 h-4" />
                    </button>
                    <span className="text-sm">Jay Chou 🌟</span>
                </div>
                {/* Show search button when input is clicked */}
                <button
                    className={clsx(
                        "absolute top-1/2 -translate-y-1/2 right-3 text-[#aaaaaa]",
                        { hidden: !isClick } // Show here
                    )}
                >
                    <MagnifyingGlassIcon className="w-4 h-4" />
                </button>
            </form>
    );
};

export default Search;
