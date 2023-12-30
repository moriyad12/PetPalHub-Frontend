import {InputLabel} from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import * as React from "react";
import {FilterBehaviour} from "./FilterBehaviour";

export const FilterHealthStatus = ({setHealthStatus}) => {

    const HealthStatussOptions = ["HEALTHY", "UNHEALTHY"]
    const planIndexMap = new Map(HealthStatussOptions.map((plan, index) => [plan, index]));
    const [viewedHealthStatus, setViewedHealthStatus] = React.useState("");


    return (
        <FormControl sx={{minWidth: 600}}>
            <InputLabel id="demo-simple-select-helper-label">HealthStatus</InputLabel>
            <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                label="ads Plans"
                value={viewedHealthStatus}

                onChange={(event) => {
                    setHealthStatus(event.target.value)
                    setViewedHealthStatus(event.target.value)
                }
                }
            >
                {HealthStatussOptions.map((option, index) => (
                    <MenuItem key={index} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
            <FormHelperText>
                Choose The Pet HealthStatus
            </FormHelperText>
        </FormControl>
    )
}