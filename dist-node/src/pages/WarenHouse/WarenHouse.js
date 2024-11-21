import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import TitleBig from "../../components/Title/Title_h1";
import SubTitle from "../../components/SubTitle/SubTitle";
import Box from "../../components/Box/Box";
import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Button from "../../components/Button/Button";
import axios from "axios";
import PopUpWarning from "../../components/popUpWarning/PopUpWarning";
import WarningIconPopUp from "../../assets/alert-warning.png";
const Warenhouse = () => {
    const [search, setSearch] = useState("");
    const [id, setId] = useState('');
    const [selectedMaterial, setSelectedMaterial] = useState("Material A - (Pen)");
    const [data, setData] = useState([]);
    const [showWarning, setShowWarning] = useState(false);
    const handleMaterialSelect = (material) => {
        setSelectedMaterial(material);
        setSearch("");
    };
    const fetchData = async (material) => {
        try {
            const responseData = await axios.get("http://localhost:/inventory/all");
            const filteredMaterials = responseData.data.filter((item) => item.materialName.toLowerCase() === material.toLowerCase());
            setData(filteredMaterials);
            if (filteredMaterials.length > 0) {
                console.log(responseData.data);
            }
            else {
                console.log("Nenhum dado encontrado no Back-End");
            }
            const lastItem = filteredMaterials[filteredMaterials.length - 1];
            if (lastItem && lastItem.finalInventory < 0) {
                setShowWarning(true);
            }
            else {
                setShowWarning(false);
            }
        }
        catch (error) {
            console.log("Erro na conexão do backend", error);
        }
    };
    useEffect(() => {
        if (selectedMaterial) {
            fetchData(selectedMaterial);
        }
    }, [selectedMaterial]);
    return (_jsxs("section", { className: "pt-[73px] flex flex-col justify-center items-center gap-10 pb-24", children: [_jsx("div", { className: "p-10 flex flex-col text-center gap-14", children: _jsxs("div", { children: [_jsx(TitleBig, { title: "Inventory Control" }), _jsx(SubTitle, { subTitle: "See your stock here" })] }) }), _jsxs("div", { className: "flex flex-col gap-4", children: [_jsxs("div", { className: "flex", children: [_jsx("div", { className: "", children: _jsx(SearchBar, { placeholder: "Search here...", setSearch: setSearch }) }), _jsx("div", { className: "flex justify-center items-center w-[210px]", children: _jsx(Button, { text: "Material A", onClick: () => handleMaterialSelect("Material A - (Pen)") }) })] }), _jsx(Box, { classname: "w-[1237px] p-4", children: _jsx("div", { className: "max-h-[480px] overflow-y-auto", children: _jsxs("table", { className: "font-poppinsFont text-center w-full rounded-xl", children: [_jsx("thead", { className: "text-xl bg-neutral-200 sticky top-0 z-10", children: _jsxs("tr", { children: [_jsx("th", { className: "p-4", children: "Week" }), _jsx("th", { className: "p-4", children: "Material" }), _jsx("th", { className: "p-4", children: "Safety Stock" }), _jsx("th", { className: "p-4", children: "Demand" }), _jsx("th", { className: "p-4", children: "Inicial Inventory" }), _jsx("th", { className: "p-4", children: "Final Inventory" })] }) }), _jsx("tbody", { className: "text-base", children: data.length > 0 ? (data.map((item) => (_jsxs("tr", { className: "border-b last:border-none hover:bg-gray-100 transition-colors", children: [_jsx("td", { className: "p-4", children: item.week }), _jsx("td", { className: "p-4", children: item.materialName }), _jsxs("td", { className: "p-4", children: [item.safetyStock, " pcs"] }), _jsxs("td", { className: "p-4", children: [item.demand, " pcs"] }), _jsxs("td", { className: "p-4", children: [item.initialInventory, " pcs"] }), _jsxs("td", { className: "p-4", children: [item.finalInventory, " pcs"] })] }, id)))) : (_jsx("tr", { className: "border-b last:border-none hover:bg-gray-100 transition-colors", children: _jsx("td", { colSpan: 8, className: "p-4", children: "No results found" }) })) })] }) }) })] }), showWarning && (_jsx(PopUpWarning, { image: {
                    src: WarningIconPopUp,
                    alt: "warning_image_popup"
                }, content: "Negative stock detected!", onClose: () => setShowWarning(false), classnameContent: "text-white font-semibold" }))] }));
};
export default Warenhouse;
