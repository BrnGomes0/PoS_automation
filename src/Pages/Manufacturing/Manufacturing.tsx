import React, { useState, useEffect } from "react";
import TitleBig from "../../components/Title/Title_h1";
import SubTitle from "../../components/SubTitle/SubTitle";
import Box from "../../components/Box/Box";
import SearchBar from "../../components/SearchBar/SearchBar";
import Button from "../../components/Button/Button";
import PopUp from "../../components/PopUp/PopUp";
import axios from "axios";


const Manufacturing: React.FC = () => {
    const [search, setSearch] = useState("");
    const [popUp, setPopUp] = useState(false);
    const [, setSelectedMaterial] = useState<"Material A - (Pen)" | "">("")
    const [data, setData] = useState<any[]>([]); //Armazenando os dados da API

    const fetchData = async (material: "Material A - (Pen)") =>{
        try{
            //Escolher a url de acordo com oq for clicado A ou B
            const url = material === "Material A - (Pen)"
                ? "http://localhost:8081/purchaseOrder/allMaterialsA"
                : "http://localhost:8081/purchaseOrder/allMaterialsA";

            const response = await axios.get(url);

            //Filtrando os materiais com base no materialText da API
            const filteredMaterials = response.data.filter((item: any) =>
                 item.materialName.toLowerCase() === material.toLowerCase()
            );

            setData(filteredMaterials);
            console.log("Dados pegos:", response.data)
            console.log("Materiais filtrados: ", filteredMaterials)
        }catch (error){
            console.log("Erro na conexão: ", error)
        }
    } 

    const handleMaterialSelect = (material: "Material A - (Pen)") => {
        setSelectedMaterial(material);
        setSearch(""); 
        fetchData(material)
    };

    const filterData = data.filter((item) =>
        search.toLowerCase() === "" ? item : item.week.toLowerCase().includes(search.toLowerCase)
    );

    useEffect(() =>{
        fetchData("Material A - (Pen)");
    }, []);

    return (
        <section className="pt-[73px] flex flex-col justify-center items-center gap-10 pb-20">
            <div className="p-10 flex flex-col text-center gap-14">
                <div>
                    <TitleBig title="Purchase control"/>
                    <SubTitle subTitle="See your PO here"/>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                    <div className="flex">
                        <div className="p-2">
                            <SearchBar
                                placeholder="Search here..."
                                setSearch={setSearch}
                            />
                        </div>
                        <div className="flex justify-center items-center w-[210px] p-2 gap-2">
                            <Button
                                text="Material A"
                                onClick={() => handleMaterialSelect("Material A - (Pen)")}
                            />
                        </div>
                    </div>
                <Box classname="w-[900px] p-4">
                    <div className="max-h-[400px] overflow-y-auto">
                    <table className="font-poppinsFont text-center w-full rounded-xl">
                        <thead className="text-xl bg-neutral-200 sticky top-0 z-10">
                            <tr>
                                <th className="p-4">Week</th>
                                <th className="p-4">Material</th>
                                <th className="p-4">Order Placed</th>
                                <th className="p-4">Order Received</th>
                            </tr>
                        </thead>
                        <tbody className="text-base">
                            {filterData.length > 0 ? (
                                filterData.map((item, index) => (
                                    <tr
                                        className="border-b last:border-none hover:bg-gray-100 transition-colors"
                                        key={index}>

                                        <td className="p-4">{item.week}</td>
                                        <td className="p-4">{item.materialName}</td>
                                        <td className="p-4">{item.orderPlaced} pcs</td>
                                        <td className="p-4">{item.orderReceived} pcs</td>
                                    </tr>
                                ))
                            ) : (
                                <tr className="border-b last:border-none hover:bg-gray-100 transition-colors">
                                    <td colSpan={8} className="p-4">
                                        No results found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    </div>
                </Box>
            </div>
            <div className="p-8">
                <Button
                    text="Run MRP"
                    classname="w-[130px] h-[50px]"
                    onClick={() => setPopUp(true)}
                />
                {popUp && <PopUp onClose={() => setPopUp(false)}/>}
            </div>
        </section>
    );
};

export default Manufacturing;