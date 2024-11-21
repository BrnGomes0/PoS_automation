import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import TitleBig from "../../components/Title/Title_h1";
import SubTitle from "../../components/SubTitle/SubTitle";
import Box from "../../components/Box/Box";
import Forms from "../../components/Forms/Forms";
import DropDown from "../../components/DropDown/DropDown";
import StaticInput from "../../components/StaticInput/StaticInput";
import NumberInput from "../../components/NumberInput/NumberInput";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PopUpReturn from "../../components/PopUpReturn/PopUpReturn";
const RegisterItem = () => {
    const navigate = useNavigate();
    const [popUp, setPopUp] = useState(null);
    const [selectedOption, setSelectedOption] = useState("");
    const [inputValues, setInputValues] = useState({
        materialCode: '',
        demand: 0,
        initialInventory: 0,
        safetyStock: 0,
    });
    const fetchData = async () => {
        if (inputValues.demand != 0 && inputValues.initialInventory != 0) {
            try {
                const response = await axios.post("http://localhost:8081/material", {
                    materialCode: inputValues.materialCode,
                    demand: inputValues.demand,
                    initialInventory: inputValues.initialInventory,
                    safetyStock: inputValues.safetyStock
                });
                console.log("Data Send:", response.data);
                setPopUp({ title: "Material Created", imageUrl: "/src/assets/correct.png" });
                setTimeout(() => {
                    setPopUp(null);
                    navigate("/info_record");
                }, 3000);
            }
            catch (error) {
                setPopUp({ title: "Error connecting to database", imageUrl: "/src/assets/erro.png" });
                setTimeout(() => {
                    setPopUp(null);
                }, 3000);
                console.log("Erro na conexão: ", error);
            }
        }
        else {
            setPopUp({ title: "Demand and initial inventory must be greater than 0!", imageUrl: "/src/assets/erro.png" });
            setTimeout(() => {
                setPopUp(null);
            }, 3000);
        }
    };
    const options = ['Material A - (Pen)'];
    const materialsCodes = {
        "Material A - (Pen)": "1230"
    };
    const convertToNumber = (value) => {
        return typeof value === 'string' ? parseInt(value) || 0 : value;
    };
    const handleSelect = (value) => {
        setSelectedOption(value);
        setInputValues((prevValues) => ({
            ...prevValues,
            materialCode: materialsCodes[value],
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputValues);
    };
    const handleButtonSubmit = () => {
        console.log("Material Selected: ", selectedOption, "Valores: ", inputValues.input1, inputValues.input2);
    };
    const handleChange = (field, value) => {
        setInputValues((prevValues) => ({
            ...prevValues,
            [field]: field === "materialCode" ? value : convertToNumber(value) || 0
        }));
    };
    return (_jsx("section", { className: "pt-[73px] flex flex-col justify-center items-center gap-10 pb-[365px]", children: _jsxs("div", { className: "p-10 flex flex-col gap-14 justify-center items-center", children: [_jsxs("div", { className: "text-center", children: [_jsx(TitleBig, { title: "Create a Material", classname: "text-center" }), _jsx(SubTitle, { subTitle: "Fill up the below fields", classname: "tex-center" })] }), _jsx(Box, { classname: "w-[381px] h-[210px]", children: _jsxs(Forms, { onSubmit: (e) => { e.preventDefault(); console.log(inputValues); }, children: [_jsxs("div", { className: "flex gap-2 ", children: [_jsx(StaticInput, { label: "Material Code", value: materialsCodes[selectedOption] || "0" }), _jsx(DropDown, { label: "Material", classname: "w-full", placeholder: "Select Material", options: options, onSelect: handleSelect })] }), _jsxs("div", { className: "flex gap-3", children: [_jsx(NumberInput, { label: "Demand", placeholder: "0", value: convertToNumber(inputValues.demand), method: (demand) => handleChange('demand', demand) }), _jsx(NumberInput, { label: "Initial Inventory", placeholder: "0", classname: "w-[113px]", value: convertToNumber(inputValues.initialInventory), method: (initialInventory) => handleChange('initialInventory', initialInventory) }), _jsx(NumberInput, { label: "Safety Stock", placeholder: "0", value: convertToNumber(inputValues.safetyStock), method: (safetyStock) => handleChange('safetyStock', safetyStock) })] }), _jsxs("div", { className: "flex justify-center items p-[130px] ", children: [_jsx(Button, { text: "Create", onClick: fetchData }), popUp && (_jsx(PopUpReturn, { title: popUp.title, imageUrl: popUp.imageUrl }))] })] }) })] }) }));
};
export default RegisterItem;
