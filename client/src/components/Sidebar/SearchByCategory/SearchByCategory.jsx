import {
    FormControl,
    RadioGroup,
    Radio,
    FormControlLabel,
    Typography,
    FormLabel,
    Box,
} from "@mui/material";

import { getAllCategories, getCardsByCategory } from "../../../api/fetch";
import { useEffect, useState } from "react";

function SearchByCategory({ setCards }) {
    const [categories, setCategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState("");
    useEffect(() => {
        const getInfoForCategories = async () => {
            try {
                const data = await getAllCategories();
                setCategories(data);
            } catch (err) {
                console.log(err);
            }
        };

        getInfoForCategories();
    }, []);

    const changeCurrentCategory = async (event) => {
        setCurrentCategory(event.target.value);
        const cardsByCategory = await getCardsByCategory(event.target.value);
        setCards(cardsByCategory);
    };
    return (
        <Box
            sx={{
                margin: "20px 0",
            }}
        >
            <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">
                    Категория
                </FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={currentCategory}
                    onChange={changeCurrentCategory}
                >
                    {categories.map((category) => {
                        return (
                            <Box
                                key={category._id}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <FormControlLabel
                                    value={category._id}
                                    control={<Radio />}
                                    label={category._id}
                                />
                                <Typography variant="subtitle2" component="h5">
                                    {category.numCards}
                                </Typography>
                            </Box>
                        );
                    })}
                </RadioGroup>
            </FormControl>
        </Box>
    );
}
export default SearchByCategory;
