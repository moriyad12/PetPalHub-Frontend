import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Filter.css"

export const DropdownMenu = ({options, handleChange, nameOfAttribute}) => {

    return (
        <div>
            <label className="fw-light">{nameOfAttribute}</label> <br/>
            <select className="custom-select custom-select-lg mb-1 my-select"
                    onChange={handleChange}
            >
                <option selected></option>
                {
                    options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}