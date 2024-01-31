import * as React from 'react';
import {FilterGender} from "./AllFilters/FilterGender";
import {FilterBehaviour} from "./AllFilters/FilterBehaviour";
import {FilterHealthStatus} from "./AllFilters/FilterHealthStatus";
import {FilterVaccineStatus} from "./AllFilters/FilterVaccineStatus";
import {FilterName} from "./AllFilters/FilterName";
import {FilterSpecies} from "./AllFilters/FilterSpecies";

export default function Filter( {filterDto, setFilterDto} ) {
    const [availability, setAvailability] = React.useState(null);
    const [gender, setGender] = React.useState(null);
    const [name, setName] = React.useState("");
    const [healthStatus, setHealthStatus] = React.useState(null);
    const [species, setSpecies] = React.useState(null);
    const [behaviour, setBehaviour] = React.useState(null);
    const [vaccineStatus, setVaccineStatus] = React.useState(null);

    const handleResetFilter = () => {
        setAvailability(null);
        setGender("");
        setName("");
        setHealthStatus("");
        setSpecies("");
        setBehaviour("");
        setVaccineStatus("");
        setFilterDto({});

    }

    const handleFilter = (e) => {
        const filters = []

        const variablesToHandle = [
            { key: 0, value: availability },
            { key: 2, value: gender },
            { key: 3, value: healthStatus },
            { key: 4, value: name},
            { key: 5, value: vaccineStatus },
            { key: 6, value: species },
            { key: 7, value: behaviour },
        ];
        variablesToHandle.forEach((variable) => {
            if (variable.value !== null && variable.value.trim() !== "") {
                filters.push({
                    "first": variable.key,
                    "second": variable.value,
                });
            }
        });
        setFilterDto(filters);
    };

    return (
        <div className="px-2 my-shadow my-fixed bg-light-grey">
            <h3 className="text-center my-filter-header">Filters</h3>
            <FilterName setName={setName} filter={filter} setFilter={setFilter} attribute={name} />
            <FilterSpecies setSpecies={setSpecies} filter={filter} setFilter={setFilter} attribute={species}/>

            <FilterGender setGender={setGender} filter={filter} setFilter={setFilter} attribute={gender}/>
            <FilterBehaviour setBehaviour={setBehaviour} filter={filter} setFilter={setFilter} behaviour={behaviour} attribute={behaviour}/>
            <FilterHealthStatus setHealthStatus={setHealthStatus} filter={filter}
                                setFilter={setFilter} attribute={healthStatus}/>
            <FilterVaccineStatus setVaccineStatus={setVaccineStatus} filter={filter}
                                 setFilter={setFilter} attribute={vaccineStatus}/>


            <div className="row mt-2 d-flex justify-content-center">
                <div className="col-6">
                    <button className="btn btn-primary mb-3 ms-4" onClick={handleFilter}>Filter</button>
                </div>
                <div className="col-6">
                    <button className="btn btn-primary mb-3 ms-2" onClick={() => {
                        handleResetFilter();
                    }}>Reset
                    </button>
                </div>
            </div>
        </div>
    );
}