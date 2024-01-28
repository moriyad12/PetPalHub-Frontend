import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {TextInput} from "./TextInput";

export const FilterSpecies = ({setSpecies, filter, setFilter, attribute}) => {

    const handleChange = (event) => {
        setSpecies(event.target.value);
        setFilter({...filter, species: event.target.value})
    };

    return <TextInput handleChange={handleChange} nameOfAttribute={"Species"}  attribute={attribute}/>
}