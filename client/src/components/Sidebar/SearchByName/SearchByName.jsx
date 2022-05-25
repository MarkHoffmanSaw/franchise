import { useState } from "react";
import { Box, TextField } from "@mui/material";

function SearchByName() {
    const [name, setName] = useState("");
    const handleChange = (event) => {
        setName(event.target.value);
    };
    return (
        <Box
            component="form"
            sx={{
                width: "100%",
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                fullWidth
                label="Название"
                type="search"
                size="small"
                value={name}
                onChange={handleChange}
                sx={{ mb: 1 }}
            />
        </Box>
    );
}
export default SearchByName;
