import React, {useState, useEffect} from 'react';
import "./Other.css"
import "../MyUtilities/Colors.css"
import { allAnimals } from "./AllAnimals";
import CardsSquareView from "./CardsView/CardsSquareView";
import Filter from "./FilterHandler/Filter";
import Pagination from "./Pagination.js";
import {useMyContext} from "../ErrorMessage/ErrorMessageContextProvider";

function Dashboard({filterEnabled, viewComponentIndex}) {

    const [filter, setFilter] = useState();
    const [x, setX] = useState(0);
    const { makeAllert } = useMyContext();

    const handleTrigger = () => {
        setX(x => x+1);
        makeAllert("my allert message"+x)
    }

    return(
        <div>
            <button className={"btn btn-primary"} onClick={handleTrigger}>Toggle Login</button>
            <div className="row">
                <div className="col-10 pe-1">
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