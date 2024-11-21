import { jsx as _jsx } from "react/jsx-runtime";
const Box = ({ classname, children }) => {
    return (_jsx("section", { children: _jsx("div", { className: `border-[1.6px] rounded-[20px] border-gray-400 shadow-md p-2 ${classname}`, children: _jsx("div", { className: "p-2 gap-2", children: children }) }) }));
};
export default Box;
