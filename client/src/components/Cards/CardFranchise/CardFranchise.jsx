import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";

function CardFranchise({ image, title, description, priceMin, priceMax, id }) {
    return (
        <Grid item xs={12} md={3}>
            <Card
                sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <CardMedia
                    component="img"
                    image={image}
                    alt={title}
                    title={title}
                    sx={{ height: 150 }}
                />
                <CardContent
                    sx={{
                        flexGrow: 1,
                    }}
                >
                    {/* TODO: выравниевание */}
                    <Typography variant="h6" component="h3">
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" component="p">
                        {description}
                    </Typography>
                    <Typography component="div">
                        <Typography variant="subtitle2" component="span">
                            {priceMin.toLocaleString()}
                            <CurrencyRubleIcon sx={{ fontSize: "inherit" }} />
                        </Typography>
                        —
                        <Typography variant="subtitle2" component="span">
                            {priceMax.toLocaleString()}
                            <CurrencyRubleIcon sx={{ fontSize: "inherit" }} />
                        </Typography>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={id} style={{ textDecoration: "none" }}>
                        <Button variant="contained">Описание</Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    );
}
export default CardFranchise;
