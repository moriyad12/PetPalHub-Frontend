import React, {useState, useEffect} from 'react';
import "./Other.css"
import "../MyUtilities/Colors.css"
import { allAnimals } from "./AllAnimals";
import CardsSquareView from "./CardsView/CardsSquareView";
import Filter from "./FilterHandler/Filter";
import Pagination from "./Pagination.js";

function Dashboard({filterEnabled, viewComponentIndex}) {

    const [filter, setFilter] = useState();

    // className="container-fluid"
    return(
        <div>
            <div className="row">
                <div className="col-2 bg-light-grey">
                    <h1 className="left-text">Find your perfect companion and make a forever friend</h1>
                </div>
                <div className="col-8 pe-1">
                    <div className="bg-light-grey p-3">
                        <CardsSquareView cards={allAnimals}/>
                    </div>
                </div>
                <div className="col-2 ps5">
                    <Filter filter={filter} setFilter={setFilter}/>
                </div>
            </div>
            <Pagination totalRecords={1000}/>
        </div>
    );
}

export default Dashboard;