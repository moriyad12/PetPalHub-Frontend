import React, {useState, useEffect, useContext} from 'react';
import "./Other.css"
import "../MyUtilities/Colors.css"
import CardsSquareView from "./CardsView/CardsSquareView";
import Filter from "./FilterHandler/Filter";
import Pagination from "./Pagination.js";
import {dashboardTypes} from "./DashboardTypes";
import DashboardListView from "./DashboardListView";
import Tabs from "./Tabs/Tabs";
import {getUserToken, isUserStaffOrManager} from "../Authentication/UserAuthentication";
import {useMyContext} from "../ErrorMessage/ErrorMessageContextProvider";
import PetCreation from "../Pet/PetCreation";
import MasterApi from "../Apis/MasterApi";

function Dashboard({filterEnabled, viewComponentIndex}) {
    const [filterDto, setFilterDto] = useState([]);
    const [page, setPage] = React.useState(1);
    const [tabIndex, setTabIndex] = React.useState("1");
    const [data, SetData] = React.useState([]);
    const { makeAlert } = useMyContext();

    const isTabsEnabled = () => {return viewComponentIndex === 2 && isUserStaffOrManager()}

    const getDtoListFromBackEnd = async () => {
        try {
            const response = await dashboardTypes({filters: filterDto}, viewComponentIndex, page-1,12,tabIndex);
            SetData(response.data);
        } catch (error) {
            makeAlert(error.response.data.message)
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
            {isTabsEnabled() ?
            <div className="row">
                    <div className="content-header">
                        <Tabs setTabIndex={setTabIndex}/>
                    </div>
            </div>
                : null}
            {filterEnabled ?
            <div className="row">
                <div className="col-10 pe-1">

                    <div className="bg-light-grey p-3">
                        { viewData() }
                    </div>
                </div>
                <div className="col-2 ps5">
                    <Filter filterDto={filterDto} setFilterDto={setFilterDto}/>
                </div>
            </div>
                : <div className="row">
                    <div className="col-15 pe-1">

                        <div className="bg-light-grey p-3">
                            { viewData() }
                        </div>
                    </div>
                </div>}
            <div  style={{position: 'fixed', bottom: 60,right:60}}>
                {viewComponentIndex===3 ?
                    <PetCreation  buttonName="Create Pet" handleSubmitFunction={async(Pet)=>{
                        console.log(getUserToken())
                        await MasterApi.post("addPet", Pet,{headers: {"Authorization": `Bearer ${getUserToken()}`}});
                    }}/>
                    : null}
            </div>
            <Pagination currentPage={page} setCurrentPage={setPage}  totalRecords={1000}/>
        </div>
    );
}

export default Dashboard;