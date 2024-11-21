import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SearchIcon from "../Icons/SearchIcon/SearchIcon";
const SearchBar = ({ setSearch, placeholder }) => {
    return (_jsxs("div", { className: "flex border-solid border-[1.4px] border-[#bdc1c6] items-center rounded-md p-1 gap-2 text-[#9aa0a6] w-[310px] h-[40px]", children: [_jsx(SearchIcon, { className: "w-[22px] h-[22px]" }), _jsx("input", { type: "search", className: "border-none outline-none w-[300px] h-[36px]", onChange: (e) => setSearch(e.target.value), placeholder: placeholder })] }));
};
export default SearchBar;
