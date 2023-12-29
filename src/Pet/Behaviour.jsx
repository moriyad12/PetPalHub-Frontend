import {InputLabel} from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import * as React from "react";

export const Behaviour = ({setBehaviour}) => {

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
                required={true}
                value={viewedBehaviour}

                onChange={(event) => {
                    setBehaviour({
                        "id" : planIndexMap.get(event.target.value)+1,
                        "name" : event.target.value
                    })
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