import React, {useState, useEffect} from 'react';
import "./CardsSquareView.css";

function Dashboard({cards}) {
    const chunkArray = (array, size) => {
        return Array.from({ length: Math.ceil(array.length / size) }, (v, i) =>
            array.slice(i * size, i * size + size)
        );
    };

    return(
        <div>
            {chunkArray(cards, 4).map((row, rowIndex) => (
                <div className="row mb-3">
                    {
                        row.map((card, index) => {
                            return (
                                <div className="col-3">
                                    <a href="https://www.google.com/" className="no-underline-link">
                                        <div className="card animal-card">
                                            <img src={card.img} className="animal-img" alt="..."/>
                                            <div className="card-body">
                                                <h5 className="card-title">{card.cardTitle}</h5>
                                                <div className="large-text-container">
                                                    <p className="card-text truncate fw-light">{card.cardText}</p>
                                                </div>
                                                {/*<a href={card.link}*/}
                                                <a href="https://www.facebook.com/" className="btn btn-primary bottom-right-button">Adopt</a>
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

export default Dashboard;