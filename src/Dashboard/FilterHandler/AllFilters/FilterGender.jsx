import * as React from "react";
import {DropdownMenu} from "../DropdownMenu";

export const FilterGender = ({setGender, filter, setFilter, attribute}) => {

    const gendersOptions = ["MALE", "FEMALE", "NONE"]

    const handleChange = (event) => {
        setGender(event.target.value);
        setFilter({...filter, gender: event.target.value})
    };

    return <DropdownMenu handleChange={handleChange} options={gendersOptions} attribute={attribute} nameOfAttribute={"Gender"}/>
}