import { jsx as _jsx } from "react/jsx-runtime";
const Forms = ({ children, onSubmit }) => {
    return (_jsx("div", { children: _jsx("form", { onSubmit: onSubmit, children: children }) }));
};
export default Forms;
