import React, { useState, useEffect } from "react";
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
import { msalAccount } from "../../sso/msalInstance"

const RegisterAInforRecord: React.FC = () => {
    const accounts = msalAccount.getAllAccounts()
    const contaToken =  accounts[0].idToken
    const navigate = useNavigate();
    const [materialCode, setMaterialCode] = useState<string>('');
    const [materialText, setMaterialText] = useState<string>('');
    const [supplierCode, setSupplierCode] = useState<string>('');
    const [popUp, setPopUp] = useState<{ title: string; imageUrl?: string } | null > (null);
    const [price, setPrice] = useState<string>("0.00");
    const [leadTime, ] = useState<string>("1");

    const fetchData = async () => {
        if(accounts.length > 0){
            msalAccount.setActiveAccount(accounts[0])
        
            try{
                // Converte o valor de price (string) para um número, removendo vírgulas e pontos
                const responseGet = await axios.get("https://mrp-back-db-render.onrender.com/material/materials", {
                    headers:  {
                        Authorization: `Bearer ${contaToken}`
                    }
                })
                const responseLength = responseGet.data.length
                
                if (responseLength > 0){
                    console.log(responseGet.data[responseLength -1]) //Desse jeito ta pegando o ultimo material criado!
                    const lastMaterial = responseGet.data[responseLength -1].materialCode 
                    if(lastMaterial == 1230){
                        setMaterialText('Material A - (Pen)')
                        setSupplierCode("929028")
                    }else if(lastMaterial == 1240){
                        setMaterialText('Material B - (Car)')
                        setSupplierCode("989202")
                    }else{
                        setMaterialText("Unknown Material")
                        setSupplierCode("666")
                    }
                    setMaterialCode(responseGet.data[responseLength -1].materialCode)
                
                }else{
                    console.log("Nenhum dado encontrado!")
                }
                
            }catch (error){
                console.error("Erro na conexão: ", error);
        }
    }else{
          console.log("Erro para pegar a conta logada")  
        }

    };

    const postData = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        if(leadTime == "1"){
            try{
                    const formattedPrice = parseFloat(price.replace(/\./g, '').replace(',', '.'));
                    const formattedLeadTime = parseInt(leadTime)
                    
                    const materialPost = await axios.post("https://mrp-back-db-render.onrender.com/register", {
                        price: formattedPrice,     
                        leadTime: formattedLeadTime,
                    }, {
                        headers: {
                            Authorization: `Bearer ${contaToken}`
                        }
                    });
                    
                    const getMaterial = await axios.get("https://mrp-back-db-render.onrender.com/materials", {
                        headers:  {
                            Authorization: `Bearer ${contaToken}`
                        }
                    })
                    
                    const idLastMaterial = getMaterial.data.length

                    console.log("Ultimo material dados: ", getMaterial.data)

                    const inventoryPost = await axios.post("https://mrp-back-db-render.onrender.com/inventory/register",{
                        uri : idLastMaterial
                    },{
                        headers:  {
                            Authorization: `Bearer ${contaToken}`
                        }
                    })
                    const getInventory = await axios.get("https://mrp-back-db-render.onrender.com/inventory/all", {
                        headers:  {
                            Authorization: `Bearer ${contaToken}`
                        }
                    })

                    const idLastInventory = getInventory.data.length 

                    const purchaseOrderPost = await axios.post("https://mrp-back-db-render.onrender.com/purchaseOrder",{
                        uri: idLastInventory
                    },{
                        headers:  {
                            Authorization: `Bearer ${contaToken}`
                        }
                    })

                    console.log("Dados enviados: ", materialPost)
                    console.log("Post no inventory: ", inventoryPost)
                    console.log("Post no purchaseOrder: ", purchaseOrderPost)
                    setPopUp({title: "Info-record created", imageUrl: "/assets/correct.png"})

                    setTimeout(() =>{
                        setPopUp(null)                    
                        navigate("/inventory_management")
                    }, 3000)
                }catch (error){
                        setPopUp({title: "Error in creation of Info-Record", imageUrl: "/assets/erro.png" })

                        setTimeout(() =>{
                            setPopUp(null)
                        }, 3000)
                        console.log("Erro ao enviar os dados: ", error)
                }
            }else{
                setPopUp({title: "Para este exercício, apenas LeadTime 1 deve ser considerado!", imageUrl: "/assets/erro.png"})
                setTimeout(() =>{
                    setPopUp(null)
                }, 3000)
        }
    };

    const handlePriceChange = (newPrice: string) => {
        setPrice(newPrice)
    };

    useEffect(() =>{
        fetchData();
    }, []);

    return(
        <section className="pt-[73px] flex justify-center items-center gap-10 pb-[365px]">
            <div className="p-10 flex flex-col gap-14 justify-center items-center">
                <div className="text-center">
                   <TitleBig
                       title="Create a Info Record"
                   />
                   <SubTitle
                       subTitle="Info record of material created"
                   />
            </div>
            <Box classname="w-[400px] h-[240px]">
                <Forms>
                   <div className="flex gap-10 p-1.5 justify-center items-center ">
                        <StaticInput
                                label="Material"
                                value={materialText}
                                style={{width: 188}}
                        />
                        <StaticInput
                                label="Material Code"
                                value={materialCode}
                                style={{width: 104}}
                        />
                   </div>
                   <div className="flex gap-3 justify-center items-center">
                        <StaticInput
                            label="Supplier Code"
                            value={supplierCode}
                            style={{width: 105}}
                        />
                        <PriceInput
                            label="Price"
                            placeholder="0"
                            value={price}
                            onPriceChange={handlePriceChange}
                        />
                        <StaticInput
                            label="Lead Time"
                            value={leadTime}
                            style={{width: 100}}
                        />
                   </div>
                   <div className="flex justify-center items-center p-40">
                            <Button
                                text="Create"
                                onClick={postData}
                            />
                            {popUp &&(
                                <PopUpReturn 
                                    title={popUp.title}
                                    imageUrl={popUp.imageUrl}
                                />
                            )}
                    </div>
                </Forms>
                
            </Box>    
            </div>
        </section>
    )
}
export default RegisterAInforRecord