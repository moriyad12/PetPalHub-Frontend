import React, {useState, useEffect} from 'react';
import "./Dashboard.css";
import Filter from "./Filter";
import TablePagination from "@mui/material/TablePagination";
import Tabs from "./Tabs";
import PetHeader from "../Headers/PetHeader";


function Dashboard({filterEnabled, viewComponentIndex, getDtoListFromBackEnd}) {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [tabIndex, setTabIndex] = React.useState([]);
    const [data, SetData] = React.useState([
        {
            id: 1,
            name: 'hosny',
            species: 'Dog',
            healthStatus: 'Good',
            gender: 'Male',
            shelterName: 'Sample Shelter'
        }
        ,
        {
            id: 2,
            name: 'faros',
            species: 'Dog',
            healthStatus: 'Good',
            gender: 'Male',
            shelterName: 'Sample Shelter'
        },
        {
            id: 3,
            name: 'micol',
            species: 'Dog',
            healthStatus: 'Good',
            gender: 'Male',
            shelterName: 'Sample Shelter'
        }
    ]);

    useEffect(() => {
        getDtoListFromBackEnd([]);
    }, [page]);
    useEffect(() => {
        getDtoListFromBackEnd([]);
    }, [rowsPerPage]);
    useEffect(() => {
        getDtoListFromBackEnd([]);
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
        return <PetHeader key={i} petHeader={d} />

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