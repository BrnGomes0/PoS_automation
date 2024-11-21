import React from "react";
interface SearchBarProps {
    placeholder: string;
    setSearch: (value: string) => void;
}
declare const SearchBar: React.FC<SearchBarProps>;
export default SearchBar;
