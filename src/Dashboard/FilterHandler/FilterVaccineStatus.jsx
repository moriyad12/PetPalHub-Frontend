import * as React from "react";
import {DropdownMenu} from "./DropdownMenu";

export const FilterVaccineStatus = ({setVaccineStatus, filter, setFilter}) => {

    const vaccineStatussOptions = ["VACCINATED", "NOT_VACCINATED","PARTIALLY_VACCINATED"]

    const handleChange = (event) => {
        setVaccineStatus(event.target.value);
        setFilter({...filter, vaccineStatus: event.target.value})
    };

    return <DropdownMenu handleChange={handleChange} options={vaccineStatussOptions} nameOfAttribute={"Vaccine Status"}/>
}