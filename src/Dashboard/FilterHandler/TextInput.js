import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Filter.css"

export const TextInput = ({handleChange, nameOfAttribute}) => {

    return (
        <div>
            <label className="fw-light">{nameOfAttribute}</label> <br/>
            <input type="text" className="form-control" onChange={handleChange}/>
        </div>
    )
}