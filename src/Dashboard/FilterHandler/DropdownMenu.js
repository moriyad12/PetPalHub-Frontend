import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Filter.css"

export const DropdownMenu = ({options, handleChange, nameOfAttribute, attribute}) => {

    return (
        <div>
            <div className="d-flex justify-content-center mt-2">
                <label className="fw-light">{nameOfAttribute}</label> <br/>
            </div>
            <div className="d-flex justify-content-center">
                <select className="custom-select custom-select-lg mb-1 my-select"
                        value={attribute}
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
        </div>
    )
}