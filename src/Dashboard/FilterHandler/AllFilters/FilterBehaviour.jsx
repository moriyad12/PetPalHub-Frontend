import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {DropdownMenu} from "../DropdownMenu.js";

export const FilterBehaviour = ({setBehaviour, behaviour}) => {

    const behavioursOptions = ["AGGRESSIVE", "FRIENDLY"]

    const handleChange = (event) => setBehaviour(event.target.value)

    return <DropdownMenu handleChange={handleChange} options={behavioursOptions} nameOfAttribute={"Behaviour"} attribute={behaviour}/>
}