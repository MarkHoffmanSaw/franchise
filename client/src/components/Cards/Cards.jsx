import { Grid } from "@mui/material";
import CardFranchise from "./CardFranchise/CardFranchise";
function Cards({ allFranchise }) {
    return (
        <Grid container spacing={2} sx={{ padding: "0 20px" }}>
            {allFranchise.map((card) => {
                return (
                    <CardFranchise
                        key={card._id}
                        title={card.title}
                        image={card.image}
                        description={card.description}
                        id={card._id}
                        priceMin={card.priceMin}
                        priceMax={card.priceMax}
                    />
                );
            })}
        </Grid>
    );
}
export default Cards;
