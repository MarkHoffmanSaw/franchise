import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";

function Round({ roundOff, changeRoundOff, isRound, changeIsRound }) {
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
                onChange={changeRoundOff}
            >
                <FormControlLabel
                    value={500000}
                    disabled={!isRound}
                    control={<Radio />}
                    label="500K"
                />
                <FormControlLabel
                    value={1000000}
                    disabled={!isRound}
                    control={<Radio />}
                    label="1M"
                />
                <FormControlLabel
                    value={10000000}
                    disabled={!isRound}
                    control={<Radio />}
                    label="10M"
                />
            </RadioGroup>
        </FormControl>
    );
}
export default Round;
