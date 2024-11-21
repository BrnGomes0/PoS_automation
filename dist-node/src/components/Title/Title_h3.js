import { jsx as _jsx } from "react/jsx-runtime";
const TitleSmall = ({ title, style, classname }) => {
    return (_jsx("div", { children: _jsx("h3", { className: `p-1 font-poppinsFont font-semibold text-xl ${classname}`, style: style, children: title }) }));
};
export default TitleSmall;
