import React from "react";
import SubTitleBold from "../SubTitle/SubTitleBold";
import SubTitle from "../SubTitle/SubTitle";

interface DescriptionTwoValuesProps {
    valueBold: string;
    valueLight: string;
}

const DescriptionTwoValues: React.FC<DescriptionTwoValuesProps> = ({valueBold, valueLight}) => {
    return(
        <div className="flex gap-1 justify-center">
            <SubTitleBold
                subTitleBold={valueBold}
            />
            <SubTitle
                subTitle={valueLight}
            />
        </div>
    )
}

export default DescriptionTwoValues