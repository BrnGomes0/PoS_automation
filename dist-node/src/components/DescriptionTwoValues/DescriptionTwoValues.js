import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SubTitleBold from "../SubTitle/SubTitleBold";
import SubTitle from "../SubTitle/SubTitle";
const DescriptionTwoValues = ({ valueBold, valueLight }) => {
    return (_jsxs("div", { className: "flex gap-1 justify-center", children: [_jsx(SubTitleBold, { subTitleBold: valueBold }), _jsx(SubTitle, { subTitle: valueLight })] }));
};
export default DescriptionTwoValues;
