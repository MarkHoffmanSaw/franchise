import { Grid } from "@mui/material";
import CardFranchise from "./CardFranchise/CardFranchise";
function Cards({ allFranchise }) {
    console.log(allFranchise);
    return (
        <Grid container spacing={2} sx={{ padding: "0 20px" }}>
            {allFranchise.map((card) => {
                return (
                    <CardFranchise
                        key={card._id}
                        title={card.title}
                        image={card.image}
                        description={card.description}
                    />
                );
            })}
        </Grid>
    );
}
export default Cards;
