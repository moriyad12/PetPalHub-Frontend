import {InputLabel} from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import * as React from "react";
import {FilterBehaviour} from "./FilterBehaviour";

export const FilterGender = ({setGender}) => {

    const GendersOptions = ["MALE", "FEMALE", "NONE"]
    const planIndexMap = new Map(GendersOptions.map((plan, index) => [plan, index]));
    const [viewedGender, setViewedGender] = React.useState("");


    return (
        <FormControl sx={{minWidth: 600}}>
            <InputLabel id="demo-simple-select-helper-label">Gender</InputLabel>
            <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                label="ads Plans"
                value={viewedGender}

                onChange={(event) => {
                    setGender(event.target.value)
                    setViewedGender(event.target.value)
                }
                }
            >
                {GendersOptions.map((option, index) => (
                    <MenuItem key={index} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
            <FormHelperText>
                Choose The Pet Gender
            </FormHelperText>
        </FormControl>
    )
}