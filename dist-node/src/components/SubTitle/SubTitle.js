import { jsx as _jsx } from "react/jsx-runtime";
const SubTitle = ({ subTitle, classname }) => {
    return (_jsx("div", { children: _jsx("h3", { className: `font-poppinsFont text-sm text-[#80868B] font-medium ${classname}`, children: subTitle }) }));
};
export default SubTitle;
