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
                                        <div className="card animal-card ">
                                            <img src="/pet2.jpg" className="animal-img" alt="..."/>
                                            <div className="card-body">
                                                <h5  style={{ color: '#4d4751', fontSize: '30px',lineHeight: '1.2' }}>
                                                    {card.name}
                                                </h5>
                                                <div className="large-text-container">
                                                    <p className="truncate ">{card.species}</p>
                                                    <p className="truncate ">{card.gender}</p>
                                                    <p className="truncate ">{card.breed}</p>
                                                    <p className="truncate ">{card.description}</p>
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