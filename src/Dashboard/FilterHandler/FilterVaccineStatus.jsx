import {InputLabel} from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import * as React from "react";
import {FilterBehaviour} from "./FilterBehaviour";

export const FilterVaccineStatus = ({setVaccineStatus}) => {

    const VaccineStatussOptions = ["VACCINATED", "NOT_VACCINATED","PARTIALLY_VACCINATED"]
    const planIndexMap = new Map(VaccineStatussOptions.map((plan, index) => [plan, index]));
    const [viewedVaccineStatus, setViewedVaccineStatus] = React.useState("");


    return (
        <FormControl sx={{minWidth: 600}}>
            <InputLabel id="demo-simple-select-helper-label">VaccineStatus</InputLabel>
            <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                label="ads Plans"
                value={viewedVaccineStatus}

                onChange={(event) => {
                    setVaccineStatus(event.target.value)
                    setViewedVaccineStatus(event.target.value)
                }
                }
            >
                {VaccineStatussOptions.map((option, index) => (
                    <MenuItem key={index} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
            <FormHelperText>
                Choose The Pet VaccineStatus
            </FormHelperText>
        </FormControl>
    )
}