import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import TitleBig from "../../components/Title/Title_h1";
import SubTitle from "../../components/SubTitle/SubTitle";
import Box from "../../components/Box/Box";
import SearchBar from "../../components/SearchBar/SearchBar";
import Button from "../../components/Button/Button";
import PopUp from "../../components/PopUp/PopUp";
import axios from "axios";
const Manufacturing = () => {
    const [search, setSearch] = useState("");
    const [popUp, setPopUp] = useState(false);
    const [selectedMaterial, setSelectedMaterial] = useState("");
    const [data, setData] = useState([]); //Armazenando os dados da API
    const fetchData = async (material) => {
        try {
            //Escolher a url de acordo com oq for clicado A ou B
            const url = material === "Material A - (Pen)"
                ? "http://localhost:8081/purchaseOrder/allMaterialsA"
                : "http://localhost:8081/purchaseOrder/allMaterialsA";
            const response = await axios.get(url);
            //Filtrando os materiais com base no materialText da API
            const filteredMaterials = response.data.filter((item) => item.materialName.toLowerCase() === material.toLowerCase());
            setData(filteredMaterials);
            console.log("Dados pegos:", response.data);
            console.log("Materiais filtrados: ", filteredMaterials);
        }
        catch (error) {
            console.log("Erro na conexão: ", error);
        }
    };
    const handleMaterialSelect = (material) => {
        setSelectedMaterial(material);
        setSearch("");
        fetchData(material);
    };
    const filterData = data.filter((item) => search.toLowerCase() === "" ? item : item.week.toLowerCase().includes(search.toLowerCase));
    useEffect(() => {
        fetchData("Material A - (Pen)");
    }, []);
    return (_jsxs("section", { className: "pt-[73px] flex flex-col justify-center items-center gap-10 pb-20", children: [_jsx("div", { className: "p-10 flex flex-col text-center gap-14", children: _jsxs("div", { children: [_jsx(TitleBig, { title: "Purchase control" }), _jsx(SubTitle, { subTitle: "See your PO here" })] }) }), _jsxs("div", { className: "flex flex-col gap-4", children: [_jsxs("div", { className: "flex", children: [_jsx("div", { className: "p-2", children: _jsx(SearchBar, { placeholder: "Search here...", setSearch: setSearch }) }), _jsx("div", { className: "flex justify-center items-center w-[210px] p-2 gap-2", children: _jsx(Button, { text: "Material A", onClick: () => handleMaterialSelect("Material A - (Pen)") }) })] }), _jsx(Box, { classname: "w-[900px] p-4", children: _jsx("div", { className: "max-h-[400px] overflow-y-auto", children: _jsxs("table", { className: "font-poppinsFont text-center w-full rounded-xl", children: [_jsx("thead", { className: "text-xl bg-neutral-200 sticky top-0 z-10", children: _jsxs("tr", { children: [_jsx("th", { className: "p-4", children: "Week" }), _jsx("th", { className: "p-4", children: "Material" }), _jsx("th", { className: "p-4", children: "Order Placed" }), _jsx("th", { className: "p-4", children: "Order Received" })] }) }), _jsx("tbody", { className: "text-base", children: filterData.length > 0 ? (filterData.map((item, index) => (_jsxs("tr", { className: "border-b last:border-none hover:bg-gray-100 transition-colors", children: [_jsx("td", { className: "p-4", children: item.week }), _jsx("td", { className: "p-4", children: item.materialName }), _jsxs("td", { className: "p-4", children: [item.orderPlaced, " pcs"] }), _jsxs("td", { className: "p-4", children: [item.orderReceived, " pcs"] })] }, index)))) : (_jsx("tr", { className: "border-b last:border-none hover:bg-gray-100 transition-colors", children: _jsx("td", { colSpan: 8, className: "p-4", children: "No results found" }) })) })] }) }) })] }), _jsxs("div", { className: "p-8", children: [_jsx(Button, { text: "Run MRP", classname: "w-[130px] h-[50px]", onClick: () => setPopUp(true) }), popUp && _jsx(PopUp, { onClose: () => setPopUp(false) })] })] }));
};
export default Manufacturing;
