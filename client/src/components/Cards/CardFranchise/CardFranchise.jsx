import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";

function CardFranchise({ image, title, description }) {
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
                    <Typography variant="h6" component="h3">
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" component="p">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained">Описание</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}
export default CardFranchise;
