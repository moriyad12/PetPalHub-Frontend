import * as React from "react";
import {DropdownMenu} from "../DropdownMenu";

export const FilterGender = ({setGender, attribute}) => {

    const gendersOptions = ["MALE", "FEMALE", "NONE"]

    const handleChange = (event) => setGender(event.target.value)

    return <DropdownMenu handleChange={handleChange} options={gendersOptions} attribute={attribute} nameOfAttribute={"Gender"}/>
}