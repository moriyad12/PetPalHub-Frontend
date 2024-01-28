import React, {useState, useEffect} from 'react';
import "./Other.css"
import { allAnimals } from "./AllAnimals";

function Dashboard({filterEnabled, viewComponentIndex}) {

    const cards = allAnimals;

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-9 pe-1">
                    <div className="bg-light-grey p-3">
                        <div className="row">
                            {
                                cards.map((card, index) => {
                                    return (
                                        <div className="col-4">
                                            <div className="card animal-card">
                                                <img src={require("./fff.jpg")} className="card-img-top" alt="..."/>
                                                <div className="card-body">
                                                    <h5 className="card-title">{card.cardTitle}</h5>
                                                    <p className="card-text">{card.cardText}</p>
                                                    <a href={card.link} className="btn btn-primary">Go somewhere</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="right-container bg-black">
                        <h1>Right Container (20%)</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;