import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import TitleBig from "../../components/Title/Title_h1";
import SubTitle from "../../components/SubTitle/SubTitle";
import Forms from "../../components/Forms/Forms";
import Box from "../../components/Box/Box";
import StaticInput from "../../components/StaticInput/StaticInput";
import PriceInput from "../../components/PriceInput/PriceInput";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PopUpReturn from "../../components/PopUpReturn/PopUpReturn";
const RegisterAInforRecord = () => {
    const navigate = useNavigate();
    const [materialCode, setMaterialCode] = useState('');
    const [materialText, setMaterialText] = useState('');
    const [supplierCode, setSupplierCode] = useState('');
    const [popUp, setPopUp] = useState(null);
    const [price, setPrice] = useState("0.00");
    const [leadTime, setLeadTime] = useState("1");
    const fetchData = async () => {
        try {
            // Converte o valor de price (string) para um número, removendo vírgulas e pontos
            const responseGet = await axios.get("http://localhost:8081/material/materials");
            const responseLength = responseGet.data.length;
            if (responseLength > 0) {
                console.log(responseGet.data[responseLength - 1]); //Desse jeito ta pegando o ultimo material criado!
                const lastMaterial = responseGet.data[responseLength - 1].materialCode;
                if (lastMaterial == 1230) {
                    setMaterialText('Material A - (Pen)');
                    setSupplierCode("929028");
                }
                else if (lastMaterial == 1240) {
                    setMaterialText('Material B - (Car)');
                    setSupplierCode("989202");
                }
                else {
                    setMaterialText("Unknown Material");
                    setSupplierCode("666");
                }
                setMaterialCode(responseGet.data[responseLength - 1].materialCode);
            }
            else {
                console.log("Nenhum dado encontrado!");
            }
        }
        catch (error) {
            console.error("Erro na conexão: ", error);
        }
    };
    const postData = async (event) => {
        event.preventDefault();
        if (leadTime == "1") {
            try {
                const formattedPrice = parseFloat(price.replace(/\./g, '').replace(',', '.'));
                const formattedLeadTime = parseInt(leadTime);
                const materialPost = await axios.post("http://localhost:8081/inforecord/test", {
                    leadTime: formattedLeadTime,
                    price: formattedPrice,
                });
                const getMaterial = await axios.get("http://localhost:8081/material/materials");
                const idLastMaterial = getMaterial.data.length;
                console.log("Ultimo material dados: ", getMaterial.data);
                const inventoryPost = await axios.post(`http://localhost:8081/inventory/register/${idLastMaterial}`);
                const getInventory = await axios.get("http://localhost:8081/inventory/all");
                const idLastInventory = getInventory.data.length;
                const purchaseOrderPost = await axios.post(`http://localhost:8081/purchaseOrder/${idLastInventory}`);
                console.log("Dados enviados: ", materialPost);
                console.log("Post no inventory: ", inventoryPost);
                console.log("Post no purchaseOrder: ", purchaseOrderPost);
                setPopUp({ title: "Info-record created", imageUrl: "/src/assets/correct.png" });
                setTimeout(() => {
                    setPopUp(null);
                    navigate("/inventory_management");
                }, 3000);
            }
            catch (error) {
                setPopUp({ title: "Error in creation of Info-Record", imageUrl: "/src/assets/erro.png" });
                setTimeout(() => {
                    setPopUp(null);
                }, 3000);
                console.log("Erro ao enviar os dados: ", error);
            }
        }
        else {
            setPopUp({ title: "Para este exercício, apenas LeadTime 1 deve ser considerado!", imageUrl: "/src/assets/erro.png" });
            setTimeout(() => {
                setPopUp(null);
            }, 3000);
        }
    };
    const handlePriceChange = (newPrice) => {
        setPrice(newPrice);
    };
    const handleLeadTimeChange = (newLeadTime) => {
        setLeadTime(newLeadTime);
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (_jsx("section", { className: "pt-[73px] flex justify-center items-center gap-10 pb-[365px]", children: _jsxs("div", { className: "p-10 flex flex-col gap-14 justify-center items-center", children: [_jsxs("div", { className: "text-center", children: [_jsx(TitleBig, { title: "Create a Info Record" }), _jsx(SubTitle, { subTitle: "Info record of material created" })] }), _jsx(Box, { classname: "w-[400px] h-[240px]", children: _jsxs(Forms, { children: [_jsxs("div", { className: "flex gap-10 p-1.5 justify-center items-center ", children: [_jsx(StaticInput, { label: "Material", value: materialText, style: { width: 188 } }), _jsx(StaticInput, { label: "Material Code", value: materialCode, style: { width: 104 } })] }), _jsxs("div", { className: "flex gap-3 justify-center items-center", children: [_jsx(StaticInput, { label: "Supplier Code", value: supplierCode, style: { width: 105 } }), _jsx(PriceInput, { label: "Price", placeholder: "0", value: price, onPriceChange: handlePriceChange }), _jsx(StaticInput, { label: "Lead Time", value: leadTime, style: { width: 100 } })] }), _jsxs("div", { className: "flex justify-center items-center p-40", children: [_jsx(Button, { text: "Create", onClick: postData }), popUp && (_jsx(PopUpReturn, { title: popUp.title, imageUrl: popUp.imageUrl }))] })] }) })] }) }));
};
export default RegisterAInforRecord;
