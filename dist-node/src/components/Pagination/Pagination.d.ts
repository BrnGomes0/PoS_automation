import React from "react";
interface PaginationProps {
    limit: number;
    total: number;
    offset: number;
    setOffset: (offset: number) => void;
}
declare const Pagination: React.FC<PaginationProps>;
export default Pagination;
