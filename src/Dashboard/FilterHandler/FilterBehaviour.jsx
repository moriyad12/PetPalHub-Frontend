import {InputLabel} from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import * as React from "react";

export const FilterBehaviour = ({setBehaviour}) => {

    const BehavioursOptions = ["AGGRESSIVE", "FRIENDLY"]
    const planIndexMap = new Map(BehavioursOptions.map((plan, index) => [plan, index]));
    const [viewedBehaviour, setViewedBehaviour] = React.useState("");


    return (
        <FormControl sx={{minWidth: 600}}>
            <InputLabel id="demo-simple-select-helper-label">Behaviour</InputLabel>
            <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                label="ads Plans"
                value={viewedBehaviour}

                onChange={(event) => {
                    setBehaviour(event.target.value)
                    setViewedBehaviour(event.target.value)
                }
                }
            >
                {BehavioursOptions.map((option, index) => (
                    <MenuItem key={index} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
            <FormHelperText>
                Choose The Pet Behaviour
            </FormHelperText>
        </FormControl>
    )
}