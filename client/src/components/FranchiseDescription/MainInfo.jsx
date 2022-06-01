import { Link } from "react-router-dom";
import { Typography, Box, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";

const MainInfo = ({ title, description, foundYear, priceMin, priceMax }) => {
    return (
        <Box>
            <Box sx={{ display: "flex", mb: 1 }}>
                <Link
                    to="/"
                    style={{ textDecoration: "none", marginRight: "20px" }}
                >
                    <Button variant="contained">
                        <ArrowBackIcon />
                        Назад
                    </Button>
                </Link>
                <Typography variant="h6" component="h2">
                    {title}
                </Typography>
            </Box>

            <Box sx={{ display: "flex", mb: 1 }}>
                <Box sx={{ mr: 5 }}>
                    <Typography variant="subtitle1" component="p">
                        {description}
                    </Typography>
                    <Typography variant="body1" component="p">
                        Год основания:{" "}
                        <Typography variant="subtitle2" component="span">
                            {foundYear}
                        </Typography>
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="body1" component="p">
                        Минимальная цена:{" "}
                        <Typography variant="subtitle2" component="span">
                            {priceMin}
                        </Typography>
                        <CurrencyRubleIcon sx={{ fontSize: "inherit" }} />
                    </Typography>
                    <Typography variant="body1" component="p">
                        Максимальная цена:{" "}
                        <Typography variant="subtitle2" component="span">
                            {priceMax}
                        </Typography>
                        <CurrencyRubleIcon sx={{ fontSize: "inherit" }} />
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};
export default MainInfo;
