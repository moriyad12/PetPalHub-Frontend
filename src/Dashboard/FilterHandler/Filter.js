import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {ImEqualizer} from "react-icons/im";
import TextField from "@mui/material/TextField";
import {FilterGender} from "./FilterGender";
import {FilterBehaviour} from "./FilterBehaviour";
import {FilterHealthStatus} from "./FilterHealthStatus";
import {FilterVaccineStatus} from "./FilterVaccineStatus";
import {FilterName} from "./FilterName";
import {FilterSpecies} from "./FilterSpecies";

export default function Filter( {getDtoListFromBackEnd, filter, setFilter} ) {
    const [availability, setAvailability] = React.useState(null);
    const [gender, setGender] = React.useState(null);
    const [name, setName] = React.useState("");
    const [healthStatus, setHealthStatus] = React.useState(null);
    const [species, setSpecies] = React.useState(null);
    const [behaviour, setBehaviour] = React.useState(null);
    const [breed, setBreed] = React.useState(null);
    const [vaccineStatus, setVaccineStatus] = React.useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);


    const handleFilter = (e) => {
        const filters = {
            filters: []
        }

        // Array of variables to handle
        const variablesToHandle = [
            { key: 0, value: availability },
            { key: 2, value: gender },
            { key: 3, value: healthStatus },
            { key: 4, value: name},
            { key: 5, value: vaccineStatus },
            { key: 6, value: species },
            { key: 7, value: behaviour },
        ];

        // Iterate over variables and push filters into the array
        variablesToHandle.forEach((variable) => {
            if (variable.value !== null && variable.value.trim() !== "") {
                filters.filters.push({
                    "first": variable.key,
                    "second": variable.value,
                });
            }
        });

        e.preventDefault();
        getDtoListFromBackEnd(filters);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <div className="filter-tab-header">
                <h3>Filter</h3>
            </div>
            <FilterName setName={setName} filter={filter} setFilter={setFilter}></FilterName>
            <FilterSpecies setSpecies={setSpecies} filter={filter} setFilter={setFilter}></FilterSpecies>

            <FilterGender setGender={setGender} filter={filter} setFilter={setFilter}></FilterGender>
            <FilterBehaviour setBehaviour={setBehaviour} filter={filter} setFilter={setFilter}></FilterBehaviour>
            <FilterHealthStatus setHealthStatus={setHealthStatus} filter={filter} setFilter={setFilter}></FilterHealthStatus>
            <FilterVaccineStatus setVaccineStatus={setVaccineStatus} filter={filter} setFilter={setFilter}></FilterVaccineStatus>
        </div>
    );
}