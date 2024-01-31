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

    const [filterDto, setFilterDto] = useState();
    const [page, setPage] = React.useState(1);
    const [tabIndex, setTabIndex] = React.useState("1");
    const [data, SetData] = React.useState([]);

    const isTabsEnabled = () => {return viewComponentIndex === 2 && isUserStaffOrManager()}

    const getDtoListFromBackEnd = async () => {
        try {
            const response = await dashboardTypes(filterDto, viewComponentIndex, page-1,12,tabIndex);
            SetData(response.data);
        } catch (error) {
            alert(error.response.data.message)
        }
    }
    useEffect(() => {
        getDtoListFromBackEnd();
    }, [filterDto, tabIndex,page]);

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
                    <Filter filterDto={filterDto} setFilterDto={setFilterDto}/>
                        : null}
                </div>
            </div>
            <Pagination currentPage={page} setCurrentPage={setPage}  totalRecords={1000}/>
        </div>
    );
}

export default Dashboard;