import React from "react";
interface TableHeader {
    header: string;
    key: string;
}
interface TableRow {
    [key: string]: string | number | undefined;
}
interface TableProps {
    columns: TableHeader[];
    data: TableRow[];
}
declare const ManufacturingTable: React.FC<TableProps>;
export default ManufacturingTable;
