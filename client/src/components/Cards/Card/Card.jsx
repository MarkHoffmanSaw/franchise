import { Grid } from "@mui/material";

function Card({ card }) {
    return (
        <Grid item xs={12} md={4}>
            {card.title}
        </Grid>
    );
}
export default Card;
