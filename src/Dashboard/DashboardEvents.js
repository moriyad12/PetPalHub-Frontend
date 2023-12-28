import React, {useEffect} from "react";
import {FiMenu} from "react-icons/fi";
import {FaSearch} from "react-icons/fa";
import TablePagination from "@mui/material/TablePagination";
import Tabs from "./Tabs";
// import TabList from '@mui/lab/TabList';

function DashboardEvents({getDtoListFromBackEnd}) {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    useEffect(() => {
        getDtoListFromBackEnd();
    }, [page]);
    useEffect(() => {
        getDtoListFromBackEnd();
    }, [rowsPerPage]);

    const handleChangePage = async (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value));
        setPage(0);
    };

    return (
        <div className="main center">
            <nav className="navbar flex">
                <div className="middle flex">
                    <input type="text" placeholder="Search"/>
                    <i className="space-icon">
                        {/*<BasicPopover*/}
                        {/*name={name} address={address} country={country} state={state} eventCategory={eventCategory} eventSubCategory={eventSubCategory} organizerName={organizerName}*/}
                        {/*setName={setName} setAddress={setAddress} setCountry={setCountry} setState={setState} setEventCategory={setEventCategory} setEventSubCategory={setEventSubCategory} setOrganizerName={setOrganizerName}*/}
                        {/*statesInCountry={statesInCountry} setStatesInCountry={setStatesInCountry}*/}
                        {/*modifyPages={modifyPages}*/}
                        {/*/>*/}
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
                    {/*<Tabs/>*/}
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
    );
}
export default DashboardEvents;

