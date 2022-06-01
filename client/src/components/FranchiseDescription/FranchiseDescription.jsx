import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneCard } from "../../api/fetch";
import { Box } from "@mui/material";
import MainInfo from "./MainInfo";
import DescriptionTabs from "./DescriptionTabs";

const FranchiseDescription = () => {
    const { id } = useParams();
    const [description, setDesription] = useState({});
    const [fullDescription, setFullDescription] = useState({});

    useEffect(() => {
        const getFullDescription = async () => {
            try {
                const data = await getOneCard(id);
                setFullDescription(data.fullDescription);
                setDesription(data);
            } catch (err) {
                console.log(err);
            }
        };

        getFullDescription();
    }, [id]);

    return (
        <div>
            <MainInfo
                title={description.title}
                description={description.description}
                foundYear={fullDescription?.foundYear}
                priceMin={description.priceMin}
                priceMax={description.priceMax}
            />
            <DescriptionTabs
                companyDescr={fullDescription?.companyDescr}
                franchDescr={fullDescription?.franchDescr}
                quartersRequirements={fullDescription?.quartersRequirements}
                buyersRequirements={fullDescription?.buyersRequirements}
            />
        </div>
    );
};
export default FranchiseDescription;
