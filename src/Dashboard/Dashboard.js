import React, {useState, useEffect} from 'react';
import "./Other.css"
import "../MyUtilities/Colors.css"
import CardsSquareView from "./CardsView/CardsSquareView";
import Filter from "./FilterHandler/Filter";
import Pagination from "./Pagination.js";
import {dashboardTypes} from "./DashboardTypes";
import DashboardListView from "./DashboardListView";
import Tabs from "./Tabs/Tabs";
import {isUserStaffOrManager} from "../Authentication/UserAuthentication";
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
    const [page, setPage] = React.useState(1);
    const [tabIndex, setTabIndex] = React.useState("1");
    const [data, SetData] = React.useState([]);

    const isTabsEnabled = () => {
        return viewComponentIndex === 2 && isUserStaffOrManager();
    }

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
            const response = await dashboardTypes(convertToFilterDto(), viewComponentIndex, page-1,12,tabIndex);
            SetData(response.data);
        } catch (error) {
            alert(error.response.data.message)
        }

    }
    useEffect(() => {
        getDtoListFromBackEnd();
    }, [tabIndex,page]);

    const viewData = () => {
        if(viewComponentIndex ===1||viewComponentIndex ===3)
            return <CardsSquareView cards={data} ViewComponentIndex={viewComponentIndex}/>
        return <DashboardListView tabIndex={tabIndex} data={data}/>
    }

    return(
        <div>
            <div className="row">
                {isTabsEnabled() ?
                    <div className="content-header">
                        <Tabs setTabIndex={setTabIndex}/>
                    </div>
                    : null}
            </div>
            <div className="row">
                <div className="col-10 pe-1">

                    <div className="bg-light-grey p-3">
                        { viewData() }
                    </div>
                </div>
                <div className="col-2 ps5">
                    {filterEnabled ?
                    <Filter filter={filter} setFilter={setFilter}/>
                        : null}
                </div>
            </div>
            <Pagination currentPage={page} setCurrentPage={setPage}  totalRecords={1000}/>
        </div>
    );
}

export default Dashboard;