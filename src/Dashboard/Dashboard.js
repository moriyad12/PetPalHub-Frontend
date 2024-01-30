import React, {useState, useEffect} from 'react';
import "./Other.css"
import "../MyUtilities/Colors.css"
import { allAnimals } from "./AllAnimals";
import CardsSquareView from "./CardsView/CardsSquareView";
import Filter from "./FilterHandler/Filter";
import Pagination from "./Pagination.js";
import {dashboardTypes} from "./DashboardTypes";

function Dashboard({filterEnabled, viewComponentIndex}) {

    const [filter, setFilter] = useState({
        availability:"",
        gender:"",
        healthStatus:"",
        name:"",
        vaccineStatus:"",
        species:"",
        behaviour:""
    });
    const [page, setPage] = React.useState(0);
    const [tabIndex, setTabIndex] = React.useState("1");
    const [data, SetData] = React.useState([]);

    const convertToFilterDto = () => {

        const result = {
            filters: []
        }
        // Array of variables to handle
        const filterDto = [
            { key: 0, value: filter.availability },
            { key: 2, value: filter.gender },
            { key: 3, value: filter.healthStatus },
            { key: 4, value: filter.name},
            { key: 5, value: filter.vaccineStatus },
            { key: 6, value: filter.species },
            { key: 7, value: filter.behaviour },
        ];

        // Iterate over variables and push filters into the array
        filterDto.forEach((variable) => {
            if (variable.value !== null && variable.value.trim() !== "") {
                result.filters.push({
                    "first": variable.key,
                    "second": variable.value,
                });
            }
        });
        return result
    };

    const getDtoListFromBackEnd = async () => {
        try {
            const response = await dashboardTypes(convertToFilterDto(), viewComponentIndex, page,12,tabIndex);
            SetData(response.data);
        } catch (error) {
            alert(error.response.data.message)
        }

    }
    useEffect(() => {
        getDtoListFromBackEnd();
    }, [tabIndex,page]);

    // className="container-fluid"
    return(
        <div>
            <div className="row">
                <div className="col-10 pe-1">
                    <div className="bg-light-grey p-3">
                        <CardsSquareView cards={data}/>
                    </div>
                </div>
                <div className="col-2 ps5">
                    <Filter filter={filter} setFilter={setFilter}/>
                </div>
            </div>
            <Pagination currentPage={page} setCurrentPage={setPage}  totalRecords={1000}/>
        </div>
    );
}

export default Dashboard;