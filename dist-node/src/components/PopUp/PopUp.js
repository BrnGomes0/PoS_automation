import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import TitleSmall from "../Title/Title_h3";
import SubTitle from "../SubTitle/SubTitle";
import { useEffect } from "react";
import NumberInput from "../NumberInput/NumberInput";
import Button from "../Button/Button";
import axios from "axios";
import PopUpReturn from "../PopUpReturn/PopUpReturn";
import DropDown from "../DropDown/DropDown";
import StaticInput from "../StaticInput/StaticInput";
const PopUp = ({ onClose }) => {
    const [popUp, setPopUp] = useState(null);
    const [option, setSelectedOption] = useState("Material A - (Pen)");
    const [week, setWeek] = useState("");
    const [inputValues, setInputValues] = useState({
        materialConsumption: '0',
        orderReceived: '0'
    });
    const handleMaterialChange = (value) => {
        setSelectedOption(value);
    };
    const fetchDataGetWeek = async () => {
        try {
            const dataGetWeek = await axios.get("http://localhost:8081/inventory/all");
            const valores = dataGetWeek.data.length;
            setWeek(dataGetWeek.data[valores - 1].week);
        }
        catch (error) {
        }
    };
    const fetchData = async (material) => {
        try {
            //pegar o ultimo inventory criado
            const dataInventory = await axios.get("http://localhost:8081/inventory/all");
            console.log("Material do tipo: ", material);
            const filteredMaterials = dataInventory.data.filter((item) => item.materialName.toLowerCase() === material.toLowerCase());
            const valoresCriados = filteredMaterials.length;
            if (valoresCriados > 1) {
                const putMaterial = filteredMaterials[valoresCriados - 1].inventory_id;
                const urlPutData = await axios.post(`http://localhost:8081/purchaseOrder/updatePurchasingOrder/${putMaterial}`, {
                    demand: inputValues.materialConsumption,
                    orderReceived: inputValues.orderReceived
                });
                setPopUp({ title: "New values updated", imageUrl: "/src/assets/correct.png" });
                setTimeout(() => {
                    setPopUp(null);
                }, 3000);
            }
            else if (valoresCriados == 1) {
                const firstMaterial = filteredMaterials[0].inventory_id;
                const urlPutData = await axios.post(`http://localhost:8081/purchaseOrder/updatePurchasingOrder/${firstMaterial}`, {
                    demand: inputValues.materialConsumption,
                    orderReceived: inputValues.orderReceived
                });
                setPopUp({ title: "New values updated", imageUrl: "/src/assets/correct.png" });
            }
        }
        catch (error) {
            setPopUp({ title: "Error for put the new values", imageUrl: "/src/assets/erro.png" });
            console.log("Erro: ", error);
        }
        finally {
            setTimeout(() => {
                setPopUp(null);
                if (onClose)
                    onClose();
            }, 3000);
        }
    };
    const handleChange = (field, value) => {
        setInputValues((prevValues) => ({
            ...prevValues,
            [field]: value
        }));
    };
    const options = ["Material A - (Pen)"];
    useEffect(() => {
        fetchDataGetWeek();
    });
    return (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-5 backdrop-blur-sm flex justify-center items-center z-50", children: _jsxs("div", { className: "p-4 bg-white w-[406px] h-[450px] rounded-xl flex flex-col justify-center items-center gap-6 shadow-lg", children: [_jsx("button", { className: "place-self-end text-gray-500", onClick: onClose, children: "X" }), _jsxs("div", { className: "flex flex-col text-center", children: [_jsx(TitleSmall, { title: "Informations:" }), _jsx(SubTitle, { subTitle: "Put the new values" })] }), _jsxs("div", { className: "flex flex-col justify-center items-center", children: [_jsxs("div", { className: "flex flex-row", children: [_jsx(StaticInput, { label: "Currently Week", value: week, style: { width: 104 } }), _jsx(DropDown, { label: "Material", classname: "w-full", placeholder: "Select Material", options: options, onSelect: handleMaterialChange })] }), _jsx("div", { children: _jsx(NumberInput, { label: "Material Consumption", placeholder: "0", classname: "text-center", style: { width: 165 }, value: inputValues.materialConsumption, method: (materialConsumption) => handleChange('materialConsumption', materialConsumption) }) }), _jsx("div", { children: _jsx(NumberInput, { label: "Order Received", placeholder: "0", classname: "text-center", style: { width: 114 }, value: inputValues.orderReceived, method: (orderReceived) => handleChange("orderReceived", orderReceived) }) })] }), _jsxs("div", { className: "pb-6", children: [_jsx(Button, { text: "Send", classname: "w-[90px] h-[30px]", onClick: () => fetchData(option) }), popUp && (_jsx(PopUpReturn, { title: popUp.title, imageUrl: popUp.imageUrl }))] })] }) }));
};
export default PopUp;
