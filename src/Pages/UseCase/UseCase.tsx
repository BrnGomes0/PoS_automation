import React from "react";
import SubTitle from "../../components/SubTitle/SubTitle";
import Box from "../../components/Box/Box";
import TitleSmall from "../../components/Title/Title_h3";
import TitleBig from "../../components/Title/Title_h1";
import DescriptionTwoValues from "../../components/DescriptionTwoValues/DescriptionTwoValues";
import SubTitleBold from "../../components/SubTitle/SubTitleBold";

const UseCase: React.FC = () => {

    return(
        <section className="pt-[73px] flex justify-center items-center gap-10 pb-40">
            <div className="p-10 flex flex-col text-center gap-14">
                <div>
                    <TitleBig
                        title="About the system"
                    />
                    <SubTitle
                        subTitle="Subtitles about the MRP system"
                    />
                </div>
                <Box classname="w-[484px]">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-1">
                            <TitleSmall title="Supplier Information"/>
                            <DescriptionTwoValues
                                valueBold="Supplier Code Material A (Pen): "
                                valueLight="929028"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <TitleSmall title="Lead Time"/>
                            <DescriptionTwoValues
                                valueBold="Material A (Pen): "
                                valueLight="1 Week"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <TitleSmall 
                                title="Material Information"/>
                            <DescriptionTwoValues
                                valueBold="Material Code A (Pen): "
                                valueLight="1230"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <TitleSmall 
                                title="Bill of Materials (BOM)"/>
                            <SubTitleBold
                                subTitleBold="Each packaging contains 2 Pens"
                            />
                        </div>
                    </div>
                </Box>
            </div>
        </section>
    )
}

export default UseCase