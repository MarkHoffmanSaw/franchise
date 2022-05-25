import { Box, Slider, Typography } from "@mui/material";
import { useState } from "react";
import Round from "./Round";

function valuetext(value) {
    return `${value}°C`;
}

function SearchByPrice() {
    const [price, setPrice] = useState([0, 1000000]);
    /* Значение по умолчанию совпадает с <FormControlLabel value={50000}/> */
    const [roundOff, setRoundOff] = useState(50000);
    const [isRound, SetIsRound] = useState(true);

    const changePrice = (event, newPrice) => {
        setPrice(newPrice);
    };

    const changeRoundOff = (event) => {
        setRoundOff(event.target.value);
    };

    const changeIsRound = (event) => {
        SetIsRound(event.target.checked);
    };
    let step = isRound ? +roundOff : 1;
    let marks = isRound ? true : false;
    return (
        <Box
            sx={{
                margin: "20px 0",
            }}
        >
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
                    onChange={changePrice}
                    getAriaValueText={valuetext}
                    size="small"
                    marks={marks}
                    min={0}
                    step={step}
                    max={600000}
                />
            </Box>
            <Round
                roundOff={roundOff}
                changeRoundOff={changeRoundOff}
                isRound={isRound}
                changeIsRound={changeIsRound}
            />
        </Box>
    );
}
export default SearchByPrice;
