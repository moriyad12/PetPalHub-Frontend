import * as React from "react";
import {DropdownMenu} from "./DropdownMenu";

export const FilterHealthStatus = ({setHealthStatus, filter, setFilter}) => {

    const healthStatussOptions = ["HEALTHY", "UNHEALTHY"]

    const handleChange = (event) => {
        setHealthStatus(event.target.value);
        setFilter({...filter, healthStatus: event.target.value})
    };

    return <DropdownMenu handleChange={handleChange} options={healthStatussOptions} nameOfAttribute={"Health Status"}/>
}