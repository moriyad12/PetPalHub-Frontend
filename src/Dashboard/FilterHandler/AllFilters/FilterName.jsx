import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {TextInput} from "../TextInput";

export const FilterName = ({setName, filter, setFilter, attribute}) => {

    const handleChange = (event) => {
        setName(event.target.value);
        setFilter({...filter, name: event.target.value})
    };

    return <TextInput handleChange={handleChange} nameOfAttribute={"Pet Name"}  attribute={attribute}/>
}