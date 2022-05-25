import { Box, Slider, Typography } from "@mui/material";
import { useState } from "react";
import Round from "./Round";
function valuetext(value) {
    return `${value}°C`;
}

function SearchByPrice() {
    const [price, setPrice] = useState([10000, 100000]);

    const handleChange = (event, newPrice) => {
        setPrice(newPrice);
    };

    return (
        <>
            <Typography variant="subtitle2" component="h5">
                Цена:{" "}
                <Typography variant="subtitle1" component="span">
                    {price[0]}-{price[1]}
                </Typography>
            </Typography>
            <Box sx={{ width: "100%" }}>
                <Slider
                    getAriaLabel={() => "Price range"}
                    value={price}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    size="small"
                    min={1000}
                    step={1000}
                    max={600000}
                />
            </Box>
            <Round />
        </>
    );
}
export default SearchByPrice;
