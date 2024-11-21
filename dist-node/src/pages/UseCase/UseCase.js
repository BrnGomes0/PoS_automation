import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SubTitle from "../../components/SubTitle/SubTitle";
import Box from "../../components/Box/Box";
import TitleSmall from "../../components/Title/Title_h3";
import TitleBig from "../../components/Title/Title_h1";
import DescriptionTwoValues from "../../components/DescriptionTwoValues/DescriptionTwoValues";
import SubTitleBold from "../../components/SubTitle/SubTitleBold";
const UseCase = () => {
    return (_jsx("section", { className: "pt-[73px] flex justify-center items-center gap-10 pb-40", children: _jsxs("div", { className: "p-10 flex flex-col text-center gap-14", children: [_jsxs("div", { children: [_jsx(TitleBig, { title: "About the system" }), _jsx(SubTitle, { subTitle: "Subtitles about the MRP system" })] }), _jsx(Box, { classname: "w-[484px]", children: _jsxs("div", { className: "flex flex-col gap-6", children: [_jsxs("div", { className: "flex flex-col gap-1", children: [_jsx(TitleSmall, { title: "Supplier Information" }), _jsx(DescriptionTwoValues, { valueBold: "Supplier Code Material A (Pen): ", valueLight: "929028" })] }), _jsxs("div", { className: "flex flex-col gap-1", children: [_jsx(TitleSmall, { title: "Lead Time" }), _jsx(DescriptionTwoValues, { valueBold: "Material A (Pen): ", valueLight: "1 Week" })] }), _jsxs("div", { className: "flex flex-col gap-1", children: [_jsx(TitleSmall, { title: "Material Information" }), _jsx(DescriptionTwoValues, { valueBold: "Material Code A (Pen): ", valueLight: "1230" })] }), _jsxs("div", { className: "flex flex-col gap-1", children: [_jsx(TitleSmall, { title: "Bill of Materials (BOM)" }), _jsx(SubTitleBold, { subTitleBold: "Each packaging contains 2 Pens" })] })] }) })] }) }));
};
export default UseCase;
