import {InputLabel} from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import * as React from "react";

export const HealthStatus = ({setHealthStatus}) => {

    const HealthStatussOptions = ["HEALTHY", "UNHEALTHY"]
    const planIndexMap = new Map(HealthStatussOptions.map((plan, index) => [plan, index]));
    const [viewedHealthStatus, setViewedHealthStatus] = React.useState("");


    return (
        <div className="m-2">
            <FormControl sx={{minWidth: 600}}>
                <InputLabel id="demo-simple-select-helper-label">HealthStatus</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="ads Plans"
                    required={true}
                    value={viewedHealthStatus}

                    onChange={(event) => {
                        setHealthStatus(planIndexMap.get(event.target.value))
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
            </FormControl>
        </div>
    )
}