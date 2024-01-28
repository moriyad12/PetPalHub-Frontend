import React, {useState, useEffect} from 'react';
import "./Other.css"
import "../MyUtilities/Colors.css"
import { allAnimals } from "./AllAnimals";
import CardsSquareView from "./CardsView/CardsSquareView";

function Dashboard({filterEnabled, viewComponentIndex}) {

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-2 bg-light-grey">
                    {/*<img src={require("./ff4.jpg")} className="dashboard-image"/>*/}
                    <h1 className="left-text">Find your perfect companion and make a forever friend</h1>
                </div>
                <div className="col-8 pe-1">
                    <div className="bg-light-grey p-3">
                        <CardsSquareView cards={allAnimals}/>
                    </div>
                </div>
                <div className="col-2 ps-1">
                    <div className="bg-light-grey p-3 my-filter">
                        <div className="scroll-content">
                            <h1>Right Container (20%)</h1>
                            <h1>Right Container (20%)</h1>
                            <h1>Right Container (20%)</h1>
                            <h1>Right Container (20%)</h1>
                            <h1>Right Container (20%)</h1>
                            <h1>Right Container (20%)</h1>
                            <h1>Right Container (20%)</h1>
                            <h1>Right Container (20%)</h1>
                            <h1>Right Container (20%)</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;