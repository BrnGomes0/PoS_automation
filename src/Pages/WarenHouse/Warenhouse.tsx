import React from "react";
import TitleBig from "../../components/Title/Title_h1";
import SubTitle from "../../components/SubTitle/SubTitle";
import Box from "../../components/Box/Box";
import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Button from "../../components/Button/Button";
import axios from "axios";
import PopUpWarning from "../../components/popUpWarning/PopUpWarning";
import WarningIconPopUp from "../../assets/alert-warning.png"

const Warenhouse: React.FC = () => {
    const [, setSearch] = useState("");
    const [id, ] = useState<string>('')
    const [selectedMaterial, setSelectedMaterial] = useState<"Material A - (Pen)" >("Material A - (Pen)")
    const [data, setData] = useState<any[]>([]);
    const [showWarning, setShowWarning] = useState(false);

    
    const handleMaterialSelect = (material: "Material A - (Pen)" ) => {
        setSelectedMaterial(material);
        setSearch(""); 
    };

    const fetchData = async (material: "Material A - (Pen)" ) =>{
        try{
            const responseData = await axios.get("http://localhost:/inventory/all")
            const filteredMaterials = responseData.data.filter((item: any) =>
                item.materialName.toLowerCase() === material.toLowerCase()
           );

            setData(filteredMaterials)

            if(filteredMaterials.length > 0){
                console.log(responseData.data)
            }else{
            console.log("Nenhum dado encontrado no Back-End")
            }
            const lastItem = filteredMaterials[filteredMaterials.length - 1];
            if (lastItem && lastItem.finalInventory < 0) {
                setShowWarning(true);
            } else {
                setShowWarning(false);
            }
        }catch(error){
        console.log("Erro na conexão do backend", error)
        }
    }

    useEffect(() => {
        if(selectedMaterial){
            fetchData(selectedMaterial);
        }
    }, [selectedMaterial]);

    return(
        
        <section className="pt-[73px] flex flex-col justify-center items-center gap-10 pb-24">
            <div className="p-10 flex flex-col text-center gap-14">
                <div>
                    <TitleBig
                        title="Inventory Control"/>
                    <SubTitle
                        subTitle="See your stock here"/>
                </div>
            </div>
            <div className="flex flex-col gap-4">
            <div className="flex">
                        <div className="">
                            <SearchBar
                                placeholder="Search here..."
                                setSearch={setSearch}
                            />
                        </div>
                        <div className="flex justify-center items-center w-[210px]">
                            <Button
                                text="Material A"
                                onClick={() => handleMaterialSelect("Material A - (Pen)")}
                            />
                        </div>
                    </div>
                <Box classname="w-[1237px] p-4">
                    <div className="max-h-[480px] overflow-y-auto">
                        <table className="font-poppinsFont text-center w-full rounded-xl">
                            <thead className="text-xl bg-neutral-200 sticky top-0 z-10">
                                <tr>
                                    <th className="p-4">Week</th>
                                    <th className="p-4">Material</th>
                                    <th className="p-4">Safety Stock</th>
                                    <th className="p-4">Demand</th>
                                    <th className="p-4">Inicial Inventory</th>
                                    <th className="p-4">Final Inventory</th>
                                </tr>
                            </thead>
                            <tbody className="text-base">
                                {data.length > 0 ? (
                                    data.map((item: any) => (
                                            <tr className="border-b last:border-none hover:bg-gray-100 transition-colors" key={id}>
                                                <td className="p-4">{item.week}</td>
                                                <td className="p-4">{item.materialName}</td>
                                                <td className="p-4">{item.safetyStock} pcs</td>
                                                <td className="p-4">{item.demand} pcs</td>
                                                <td className="p-4">{item.initialInventory} pcs</td>
                                                <td className="p-4">{item.finalInventory} pcs</td>
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
            {showWarning && (
                <PopUpWarning
                    image={{
                        src: WarningIconPopUp,
                        alt: "warning_image_popup"
                    }}
                    content="Negative stock detected!"
                    onClose={() => setShowWarning(false)}
                    classnameContent="text-white font-semibold"
                />
            )}
        </section>
    )
}

export default Warenhouse