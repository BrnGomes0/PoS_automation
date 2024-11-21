import { jsx as _jsx } from "react/jsx-runtime";
const SmallLetter = ({ isBold, paragraph }) => {
    return (_jsx("div", { className: "p-2 justify-center ", children: _jsx("p", { className: `${isBold === true ? "font-bold" : "font-normal"} text-center font-poppinsFont text-sm`, children: paragraph }) }));
};
export default SmallLetter;
