import TextField from "@mui/material/TextField";
import * as React from "react";

export const Description = ({description, setDescription}) => {

    // const [viewDescription, setViewDescription] = React.useState("");

    return (
        <TextField className="m-2"
            id="fullWidth"
            type={"number"}
            label="Description"
            placeholder="description"
            multiline
            required={false}
            sx={{width: 600}}
            value={description}
            onChange={(event) => {
                setDescription(event.target.value)
                description = event.target.value
            }}
        />
    )
}