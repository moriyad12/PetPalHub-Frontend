import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Filter.css"

export const TextInput = ({handleChange, nameOfAttribute}) => {

    return (
        <div>
            <div className="d-flex justify-content-center">
                <label className="fw-light">{nameOfAttribute}</label> <br/>
            </div>
            <div className="d-flex justify-content-center">
                <input type="text" className="form-control" onChange={handleChange}/>
            </div>
        </div>
    )
}