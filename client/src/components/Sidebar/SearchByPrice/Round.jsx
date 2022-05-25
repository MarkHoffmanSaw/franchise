import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";

function Round() {
    /* Значение по умолчанию совпадает с <FormControlLabel value={50000}/> */
    const [roundOff, setRoundOff] = useState(50000);
    const [isRound, SetIsRound] = useState(true);

    const changeRound = (event) => {
        setRoundOff(event.target.value);
    };

    const changeIsRound = (event) => {
        SetIsRound(event.target.checked);
    };

    return (
        <FormControl>
            <FormLabel id="round-to-label">
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={isRound}
                                onChange={changeIsRound}
                                inputProps={{ "aria-label": "controlled" }}
                            />
                        }
                        label="Округление"
                    />
                </FormGroup>
            </FormLabel>
            <RadioGroup
                row
                aria-labelledby="round-to-label"
                name="round-to"
                value={roundOff}
                onChange={changeRound}
            >
                <FormControlLabel
                    value={10000}
                    disabled={!isRound}
                    control={<Radio />}
                    label="10K"
                />
                <FormControlLabel
                    value={50000}
                    disabled={!isRound}
                    control={<Radio />}
                    label="50K"
                />
                <FormControlLabel
                    value={100000}
                    disabled={!isRound}
                    control={<Radio />}
                    label="100K"
                />
            </RadioGroup>
        </FormControl>
    );
}
export default Round;
