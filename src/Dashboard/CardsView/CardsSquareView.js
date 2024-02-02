import React, {useState, useEffect} from 'react';
import "./CardsSquareView.css";
import {useNavigate} from "react-router-dom";

function CardsView({cards, ViewComponentIndex}) {
    const chunkArray = (array, size) => {
        return Array.from({length: Math.ceil(array.length / size)}, (v, i) =>
            array.slice(i * size, i * size + size)
        );
    };
    const navigate = useNavigate();
    const handleClickOnCard = (id) => {
        navigate(`/petview/${id}/${ViewComponentIndex}`);
    }

    const getAnimalPicture = (picture) => {
        if (picture && picture !== "")
            return picture;
        else
            return "https://i.ibb.co/ccSKFsq/unknownpet.jpg"
    }

    return (
        <div>
            {chunkArray(cards, 4).map((row) => (
                <div className="row mb-3">
                    {
                        row.map((card, index) => {
                            return (
                                <div className="col-3 ">
                                    <a href="" onClick={() => {
                                        handleClickOnCard(card.id)
                                    }} className="no-underline-link">
                                        <div className="card animal-card ">
                                            <img src={getAnimalPicture(card.profilePicturePath)} className="animal-img"
                                                 alt="..."/>
                                            <div className="card-body">
                                                <h5 style={{color: '#4d4751', fontSize: '30px', lineHeight: '1.2'}}>
                                                    {card.name.slice(0, 16)}
                                                </h5>
                                                <div className="large-text-container">
                                                    <p className="truncate m-1">{card.species}</p>
                                                    <p className="truncate m-1">{card.gender}</p>
                                                    <p className="truncate m-1">{card.healthStatus}</p>
                                                    <p className="truncate m-1">{card.shelterName}</p>
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