import React from "react";
import Box from "../Box/Box";

interface TableHeader{
    header: string;
    key: string;
}

interface TableRow{
    [key: string]: string | number | undefined;
}

interface TableProps{
    columns: TableHeader[];
    data: TableRow[];
}

const ManufacturingTable: React.FC<TableProps> = ({data}) => {

    const columns: TableHeader[] = [
        { header: "Order Code", key: "order_code"},
        { header: "Week", key: "week"},
        { header: "Material", key: "material"},
        { header: "Demand Cost", key: "demand_cost"},
        { header: "In Stock", key: "in_stock"},
        { header: "Purch. Order", key: "purch_order"},
        { header: "Consumption", key: "consumption"},
      ];

    return(
       <Box classname="w-[1237px] p-2">
            <table className="font-poppinsFont text-center w-full rounded-xl">
                <thead className="text-xl bg-neutral-200">
                    <tr>
                        {columns.map((column) => (
                            <th key={column.key} className="p-6">
                                {column.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="text-base">
                    {data.map((row, index) => (
                        <tr key={index} className="border-b last:border-none hover:bg-gray-100 transition-colors">
                            {columns.map((column) => (
                                <td key={column.key} className="p-4">
                                    {row[column.key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
       </Box>
    )
}

export default ManufacturingTable