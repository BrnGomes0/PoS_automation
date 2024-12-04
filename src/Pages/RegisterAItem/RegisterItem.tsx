import React, { useState } from "react";
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
import { msalAccount } from "../../sso/msalInstance"

const RegisterItem: React.FC  = () => {
    const accounts = msalAccount.getAllAccounts()
    const contaToken =  accounts[0].idToken
    const navigate = useNavigate()
    const [popUp, setPopUp] = useState<{ title: string; imageUrl?: string;} | null > (null);
    const [loading, setLoading] = useState<Boolean>()

    const [selectedOption, setSelectedOption] = useState<string>("");  
    const [inputValues, setInputValues] = useState<Record<string, number | string>>({
        materialCode: '',
        demand: 0,
        initialInventory: 0,
        safetyStock: 0,
    });

    const fetchData = async () => {
        setLoading(true)
        if(accounts.length > 0){
            msalAccount.setActiveAccount(accounts[0])
            console.log("Token da conta: ", contaToken)
                 // if(inputValues.demand != 0 && inputValues.initialInventory != 0){
                    try{
                        
                        // const responseData = await axios.get("http://localhost:8081/inventory/all", {
                        const responseData = await axios.get("https://mrp-back-db-render.onrender.com/inventory/all", {
                            headers:{
                                Authorization: `Bearer ${contaToken}`
                            }
                        })
                        console.log("teste2")

                        const filteredMaterials = responseData.data.filter((item: any) =>
                            item.materialName.toLowerCase() === "Material A - (Pen)".toLowerCase()
                        );
                        console.log("Tamanho: ", filteredMaterials.length)
            
                        if(filteredMaterials.length <= 0 ){
                            try{        
                                            // const response = await axios.post("http://localhost:8081/material",{
                                            const response = await axios.post("https://mrp-back-db-render.onrender.com/material",{
                                                materialCode: inputValues.materialCode,
                                                demand: inputValues.demand === 0 ? null : inputValues.demand,
                                                initialInventory: inputValues.initialInventory === 0 ? null : inputValues.initialInventory,
                                                safetyStock: inputValues.safetyStock
                                            },{
                                                headers: {
                                                    Authorization: `Bearer ${contaToken}`
                                                }
                                                });

                                            setLoading(false)
                                            console.log("Data Send:", response.data)
                                            setPopUp({title: "Material Created", imageUrl: "/assets/correct.png"});
                
                                            setTimeout(() => {
                                                setPopUp(null);
                                                navigate("/info_record")
                                            }, 5000);
                                }catch (error){
                                    setLoading(false)
                                    setPopUp({title: "Error connecting to database", imageUrl: "/assets/erro.png"})
                                    setTimeout(() =>{
                                        setPopUp(null)
                                    }, 3000);
                                    console.log("Erro na conexão: ", error)
                                }

                        }else{
                            setLoading(false)
                            setPopUp({title: "It is just possible have 1 material per person", imageUrl: "/assets/erro.png"})
                            setTimeout(() =>{
                                setPopUp(null)
                            }, 4000)
                            
                        }
                    }catch{
                        setLoading(false)
                        console.log("Problema para pegar o inventário no banco de dados")
                    }
            }else{
            setLoading(false)
            console.log("Nenhuma conta logada")
        }
    }

    const options = ['Material A - (Pen)'];
 
    const materialsCodes: Record<string, string> = {
        "Material A - (Pen)":"1230"
        
    }

    const convertToNumber = (value: string | number): number => {
        return typeof value === 'string' ? parseInt(value) || 0 : value;
    };
 
    const handleSelect = (value: string) => {
        setSelectedOption(value);

        
        setInputValues((prevValues) => ({
            ...prevValues,
            materialCode: materialsCodes[value],
        }));
    };
 
    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     console.log(inputValues);
    // };
    

    // const handleButtonSubmit = () => {
    //     console.log("Material Selected: ", selectedOption, "Valores: ", inputValues.input1, inputValues.input2);
    // };
 
    const handleChange = (field: keyof typeof inputValues, value: string) => {
        setInputValues((prevValues) => ({
            ...prevValues,
            [field]: field === "materialCode" ? value : convertToNumber(value) || 0
        }));
    }

    // useEffect(() =>{
    //     verifyMaterial("Material A - (Pen)")
    // },[])   

    return(
        <section className="pt-[73px] flex flex-col justify-center items-center gap-10 pb-[365px]">
            <div className="p-10 flex flex-col gap-14 justify-center items-center">
                <div className="text-center">
                    <TitleBig
                        title="Create a Material"
                        classname="text-center"
                    />
                    <SubTitle
                        subTitle="Fill up the below fields"
                        classname="tex-center"
                    />
                </div>
                <Box classname="w-[381px] h-[210px]">
                    <Forms onSubmit={(e) => { e.preventDefault(); console.log(inputValues); }}>
                        <div className="flex gap-2 ">
                            <StaticInput
                                label="Material Code"
                                value={materialsCodes[selectedOption] || "0"}
 
                            />
                            <DropDown
                                label="Material"
                                classname="w-full"
                                placeholder="Select Material"
                                options={options}
                                onSelect={handleSelect}
                            />
                        </div>
                        <div className="flex gap-3">
                            <NumberInput
                                label="Demand"
                                placeholder="0"
                                value={convertToNumber(inputValues.demand)}
                                method={(demand) => handleChange('demand', demand)}
                               
                            />
                            <NumberInput
                                label="Initial Inventory"
                                placeholder="0"
                                classname="w-[113px]"
                                value={convertToNumber(inputValues.initialInventory)}
                                method={(initialInventory) => handleChange('initialInventory', initialInventory)}
                            />

                            <NumberInput
                                label="Safety Stock"
                                placeholder="0"
                                value={convertToNumber(inputValues.safetyStock)}
                                method={(safetyStock) => handleChange('safetyStock', safetyStock)}
                            />
                        </div>
                            <div className="flex justify-center items p-[130px] ">
                                <Button
                                    text="Create"
                                    onClick={fetchData}
                                />
                                {popUp && (
                                    <PopUpReturn
                                        title={popUp.title}
                                        imageUrl={popUp.imageUrl}
                                        />
                                )}
                                {loading && (
                                    <PopUpReturn
                                        title="Carregando"
                                        imageUrl="/assets/correct.png"
                                        />
                                )}
                            </div>
                    </Forms>
                </Box>
            </div>
        </section>
    )
}
 
export default RegisterItem