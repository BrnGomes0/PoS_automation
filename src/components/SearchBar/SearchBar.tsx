import React from "react";
import SearchIcon from "../Icons/SearchIcon/SearchIcon";

interface SearchBarProps {
    placeholder: string;
    setSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({setSearch, placeholder}) => {
    return(
        <div className="flex border-solid border-[1.4px] border-[#bdc1c6] items-center rounded-md p-1 gap-2 text-[#9aa0a6] w-[310px] h-[40px]">
            <SearchIcon
                className="w-[22px] h-[22px]"
                
            />
            <input
                type="search"
                className="border-none outline-none w-[300px] h-[36px]"
                onChange={(e) => setSearch(e.target.value)}
                placeholder={placeholder}
            />
        </div>
    )
}

export default SearchBar;