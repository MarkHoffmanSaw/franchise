import * as React from "react";
import { FormGroup, FormControlLabel, Typography, Box } from "@mui/material";
import ControlledCheckbox from "../../Items/ControlledCheckbox";

function SearchByCategory() {
    return (
        <Box
            sx={{
                margin: "20px 0",
            }}
        >
            <Typography variant="subtitle2" component="h5">
                Категория
            </Typography>
            <FormGroup>
                <FormControlLabel
                    control={<ControlledCheckbox />}
                    label="Авто"
                />
                <FormControlLabel
                    control={<ControlledCheckbox />}
                    label="Недвижимость"
                />
                <FormControlLabel
                    control={<ControlledCheckbox />}
                    label="Еда"
                />
                <FormControlLabel
                    control={<ControlledCheckbox />}
                    label="Товары"
                />
                <FormControlLabel
                    control={<ControlledCheckbox />}
                    label="Детские товары"
                />
                <FormControlLabel
                    control={<ControlledCheckbox />}
                    label="Транспорт"
                />
            </FormGroup>
        </Box>
    );
}
export default SearchByCategory;
