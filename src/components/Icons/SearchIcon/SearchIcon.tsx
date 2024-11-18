import React from "react";

interface SearchIconProps{
    className: string;
}

const SearchIcon: React.FC<SearchIconProps> = ({className}) => {
    return(
        <img
            src="/src/assets/searchIcon.png"
            alt="Search Icon"
            className={className}
        />
    )
}

export default SearchIcon;