import React, {useState, useEffect} from 'react';
import "./Dashboard.css";
import DashboardEvents from "./DashboardEvents";


function Dashboard({filterEnabled, viewComponentIndex, getDtoListFromBackEnd}) {

    return <div className="dashboard">
        <DashboardEvents
            getDtoListFromBackEnd={getDtoListFromBackEnd}
        />
    </div>
}

export default Dashboard;