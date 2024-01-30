import React, {useState, useEffect} from 'react';
import "./CardsSquareView.css";
import {useNavigate} from "react-router-dom";

function CardsView({cards,ViewComponentIndex}) {
    const chunkArray = (array, size) => {
        return Array.from({ length: Math.ceil(array.length / size) }, (v, i) =>
            array.slice(i * size, i * size + size)
        );
    };
    const navigate = useNavigate();
    const handleClickOnCard =(id)=>{
        const params = {
            id: id,
            ViewComponentIndex: ViewComponentIndex
        };
        navigate("petview", { state: params, replace: true });
    }

    return(
        <div>
            {chunkArray(cards, 4).map((row, rowIndex) => (
                <div className="row mb-3">
                    {
                        row.map((card, index) => {
                            return (
                                <div className="col-3 ">
                                    <a href=""  onClick={()=>{handleClickOnCard(card.id)}} className="no-underline-link">
                                        <div className="card animal-card">
                                            <img src="https://i.ibb.co/2MdPnzR/d1.jpg" className="animal-img" alt="..."/>
                                            <div className="card-body">
                                                <h4 className="card-title">{card.name}</h4>
                                                <div className="large-text-container">
                                                    <p className="card-text truncate fw-light">{card.species}</p>
                                                    <p className="card-text truncate fw-light">{card.gender}</p>
                                                    <p className="card-text truncate fw-light">{card.breed}</p>
                                                    <p className="card-text truncate fw-light">{card.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            ))}
        </div>
    );
}

export default CardsView;