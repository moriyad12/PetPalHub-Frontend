import React, {useState, useEffect} from 'react';
import "./Dashboard.css";
import Filter from "./Filter";
import TablePagination from "@mui/material/TablePagination";
import Tabs from "./Tabs";
import PetHeader from "../Headers/PetHeader";
import ApplicationHeader from "../Headers/ApplicationHeader";
import Header from "../Header/Header";
import AdopterApi from "../Apis/AdopterApi";


function Dashboard({filterEnabled, viewComponentIndex}) {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [tabIndex, setTabIndex] = React.useState([]);
    const [data, SetData] = React.useState([]);
    const getDtoListFromBackEnd = async (filters) => {
        try {
            if (viewComponentIndex === 1) {
                //alert(JSON.stringify(filters))
                const response = await AdopterApi.post("dashboard/" + page + "/" + rowsPerPage, filters);
                SetData(response.data);
            } else {

            }
        } catch (error) {
            alert(error.response.data.message)
        }

    }
    const emptyFilters={filters: []}
    useEffect(() => {
        getDtoListFromBackEnd(emptyFilters);
    }, [page]);
    useEffect(() => {
        getDtoListFromBackEnd(emptyFilters);
    }, [rowsPerPage]);
    useEffect(() => {
        getDtoListFromBackEnd(emptyFilters);
    }, [tabIndex]);


    const handleChangePage = async (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value));
        setPage(0);
    };

    // to be implemented
    const viewData = (d, i) => {
        if(viewComponentIndex ===1)
            return <PetHeader key={i} petHeader={d} />
        return <ApplicationHeader key={i} ApplicationHeader={d} />

    }

    return <div className="dashboard">
        <div className="main center">
            <nav className="navbar flex">
                <div className="middle flex">
                    <input type="text" placeholder="Search"/>
                    <i className="space-icon">
                        {filterEnabled ?
                        <Filter
                            getDtoListFromBackEnd={getDtoListFromBackEnd}
                        /> : null}
                    </i>
                </div>
                <div className="right flex">
                    <div className="content-header-breadcrumb">
                        <TablePagination
                            component="div"
                            count={data.length}
                            page={page}
                            onPageChange={handleChangePage}
                            rowsPerPage={rowsPerPage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </div>
                </div>
            </nav>
            <div className="content-container center">
                <div className="content-header">
                    <Tabs setTabIndex={setTabIndex}/>
                </div>
                <div className="content-body flex">
                    {
                        data.map((d, i) =>
                            <div className="card-container center">
                                { viewData(d, i) }
                                {/*<MultiActionAreaCard key={i} eventHeader={e}/>*/}
                            </div>)
                    }
                </div>
            </div>
        </div>
    </div>
}

export default Dashboard;