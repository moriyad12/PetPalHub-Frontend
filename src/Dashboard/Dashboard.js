import React, {useState, useEffect} from 'react';
import "./Dashboard.css";
import Filter from "./Filter";
import TablePagination from "@mui/material/TablePagination";
import Tabs from "./Tabs";


function Dashboard({filterEnabled, viewComponentIndex, getDtoListFromBackEnd}) {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [tabIndex, setTabIndex] = React.useState([]);

    useEffect(() => {
        getDtoListFromBackEnd();
    }, [page]);
    useEffect(() => {
        getDtoListFromBackEnd();
    }, [rowsPerPage]);
    useEffect(() => {
        getDtoListFromBackEnd();
    }, [tabIndex]);


    const handleChangePage = async (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value));
        setPage(0);
    };

    return <div className="dashboard">
        <div className="main center">
            <nav className="navbar flex">
                <div className="middle flex">
                    <input type="text" placeholder="Search"/>
                    <i className="space-icon">
                        <Filter
                            getDtoListFromBackEnd={getDtoListFromBackEnd}
                        />
                    </i>
                </div>
                <div className="right flex">
                    <div className="content-header-breadcrumb">
                        <TablePagination
                            component="div"
                            // count={events.length}
                            count={10}
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
                        // events.map((e, i) =>
                        //     <div className="card-container center">
                        //         <MultiActionAreaCard key={i} eventHeader={e}/>
                        //     </div>)
                    }
                </div>
            </div>
        </div>
    </div>
}

export default Dashboard;