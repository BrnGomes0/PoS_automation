import React, { useState } from "react";
import TitleSmall from "../Title/Title_h3";
import SubTitle from "../SubTitle/SubTitle";
import { useEffect } from "react";
import NumberInput from "../NumberInput/NumberInput";
import Button from "../Button/Button";
import axios from "axios";
import PopUpReturn from "../PopUpReturn/PopUpReturn";
import DropDown from "../DropDown/DropDown";
import StaticInput from "../StaticInput/StaticInput";

interface PopUpProps{
    onClose?: () => void
}

const PopUp: React.FC<PopUpProps>= ({onClose }) => {
    const [popUp, setPopUp] = useState<{title: string, imageUrl?: string } | null > (null);
    const [option, setSelectedOption] = useState<"Material A - (Pen)">("Material A - (Pen)")
    const [week, setWeek] = useState<string>("");
    const [inputValues, setInputValues] = useState<Record<string, string>>({
        materialConsumption: '0',
        orderReceived: '0'
    })

    const handleMaterialChange = (value : string) =>{
        setSelectedOption(value as "Material A - (Pen)");
    }
    
    const fetchDataGetWeek = async() =>{
        try{
            const dataGetWeek = await axios.get("http://localhost:8081/inventory/all")
            const valores = dataGetWeek.data.length

            setWeek(dataGetWeek.data[valores-1].week)
        }catch(error){
        }
    }
    
    const fetchData = async (material: "Material A - (Pen)") =>{
        try{
            //pegar o ultimo inventory criado
            const dataInventory = await axios.get("http://localhost:8081/inventory/all")

            console.log("Material do tipo: ", material)
            const filteredMaterials = dataInventory.data.filter((item: any) =>
                item.materialName.toLowerCase() === material.toLowerCase()
            );

            const valoresCriados = filteredMaterials.length

            if(valoresCriados > 1){
                const putMaterial = filteredMaterials[valoresCriados-1].inventory_id;

                const urlPutData = await axios.post(`http://localhost:8081/purchaseOrder/updatePurchasingOrder/${putMaterial}`,{
                    demand: inputValues.materialConsumption,
                    orderReceived: inputValues.orderReceived
                });

                setPopUp({title: "New values updated", imageUrl: "/src/assets/correct.png"})

                setTimeout(() =>{
                    setPopUp(null)
                }, 3000)
            } else if(valoresCriados == 1){

                const firstMaterial = filteredMaterials[0].inventory_id;

                const urlPutData = await axios.post(`http://localhost:8081/purchaseOrder/updatePurchasingOrder/${firstMaterial}`,{
                    demand: inputValues.materialConsumption,
                    orderReceived: inputValues.orderReceived
                });

                setPopUp({title: "New values updated", imageUrl: "/src/assets/correct.png"})
            }
        }catch(error){
            setPopUp({title: "Error for put the new values", imageUrl: "/src/assets/erro.png"})
            console.log("Erro: ", error)
        }finally { 
            setTimeout(() =>{
                setPopUp(null)
                if (onClose) onClose();
            }, 3000);
        }
    }

    const handleChange = (field: string, value: string) => {
        setInputValues((prevValues) => ({
            ...prevValues, 
            [field]: value
        }));
    }

    const options = ["Material A - (Pen)"]

    useEffect(() =>{
        fetchDataGetWeek();
    });
    
    return(
        <div className="fixed inset-0 bg-black bg-opacity-5 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="p-4 bg-white w-[406px] h-[450px] rounded-xl flex flex-col justify-center items-center gap-6 shadow-lg">
                <button className="place-self-end text-gray-500" onClick={onClose}>X</button>
                <div className="flex flex-col text-center">
                    <TitleSmall
                        title="Informations:"
                    />
                    <SubTitle
                        subTitle="Put the new values"
                    />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-row">
                        <StaticInput
                                label="Currently Week"
                                value={week}
                                style={{width: 104}}
                        />

                        <DropDown
                            label="Material"
                            classname="w-full"
                            placeholder="Select Material"
                            options={options}
                            onSelect={handleMaterialChange}
                        /> 
                    </div>

                    <div>
                        <NumberInput
                            label="Material Consumption"
                            placeholder="0"
                            classname="text-center"
                            style={{width: 165}}
                            value={inputValues.materialConsumption}
                            method={(materialConsumption) => handleChange('materialConsumption', materialConsumption)}
                        />
                    </div>
                    <div>
                        <NumberInput
                            label="Order Received"
                            placeholder="0"
                            classname="text-center"
                            style={{width: 114}}
                            value={inputValues.orderReceived}
                            method={(orderReceived) => handleChange("orderReceived", orderReceived)}
                        />
                    </div>
                </div>
                <div className="pb-6">
                    <Button
                        text="Send"
                        classname="w-[90px] h-[30px]"
                        onClick={() => fetchData(option)}
                    />

                    {popUp &&(
                        <PopUpReturn 
                            title={popUp.title}
                            imageUrl={popUp.imageUrl}
                            />
                        )}

                </div>
            </div>
        </div>
    )
}

export default PopUp;