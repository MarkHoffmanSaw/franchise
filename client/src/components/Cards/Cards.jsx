import { Grid } from "@mui/material";
import Card from "./Card/Card";
function Cards({ allFranchise }) {
    return (
        <Grid container spacing={1}>
            {allFranchise.map((card) => {
                return <Card key={card._id} card={card} />;
            })}
        </Grid>
    );
}
export default Cards;
