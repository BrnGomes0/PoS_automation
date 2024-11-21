import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from "../Box/Box.tsx";
const ManufacturingTable = ({ data }) => {
    const columns = [
        { header: "Order Code", key: "order_code" },
        { header: "Week", key: "week" },
        { header: "Material", key: "material" },
        { header: "Demand Cost", key: "demand_cost" },
        { header: "In Stock", key: "in_stock" },
        { header: "Purch. Order", key: "purch_order" },
        { header: "Consumption", key: "consumption" },
    ];
    return (_jsx(Box, { classname: "w-[1237px] p-2", children: _jsxs("table", { className: "font-poppinsFont text-center w-full rounded-xl", children: [_jsx("thead", { className: "text-xl bg-neutral-200", children: _jsx("tr", { children: columns.map((column) => (_jsx("th", { className: "p-6", children: column.header }, column.key))) }) }), _jsx("tbody", { className: "text-base", children: data.map((row, index) => (_jsx("tr", { className: "border-b last:border-none hover:bg-gray-100 transition-colors", children: columns.map((column) => (_jsx("td", { className: "p-4", children: row[column.key] }, column.key))) }, index))) })] }) }));
};
export default ManufacturingTable;
