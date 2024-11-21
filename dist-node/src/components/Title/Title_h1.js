import { jsx as _jsx } from "react/jsx-runtime";
const TitleBig = ({ title, style, classname }) => {
    return (_jsx("div", { children: _jsx("h1", { className: `p-1 font-poppinsFont font-semibold text-3xl ${classname}`, style: style, children: title }) }));
};
export default TitleBig;
