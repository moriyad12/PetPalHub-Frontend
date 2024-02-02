import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import {Country, State} from "country-state-city";
import * as React from "react";


let countries = Country.getAllCountries();
let countryNames = countries.map((country) => country.name);
let countryAndID = countries.map((country) => ({name: country.name, isoCode: country.isoCode}));

export const CountryCityStreet
    = ({country, state, address, statesInCountry,
           setCountry, setState, setAddress, setStatesInCountry,req}) => {

    return (
        <div className="flex location">
            <Autocomplete
                className={"my-2"}
                required={true}
                disablePortal
                value={country}
                id="combo-box-demo"
                options={countryNames}
                sx={{width: 289}}
                renderInput={(params) => <TextField  style={{marginBottom: "4%"}} required={req}{...params} label="Country"/>}
                onChange={(event, value) => {
                    if (!value) {
                        setCountry(null);
                        setState(null);
                        setAddress("");
                        setStatesInCountry([]);
                        return;
                    }
                    setCountry(value);
                    let countryID = countryAndID.find((country) => country.name === value).isoCode;
                    let statesInCountry = State.getStatesOfCountry(countryID);
                    let stateNames = statesInCountry.map((state) => state.name);
                    setStatesInCountry(stateNames);
                }}
            />
            <Autocomplete
                className={"my-2"}
                disablePortal
                required={true}
                value={state}
                id="combo-box-demo"
                options={statesInCountry}
                sx={{width: 300}}
                renderInput={(params) => <TextField style={{marginBottom: "1%"}} {...params} required={req} label="State"/>}
                onChange={(event, value) => {
                    if (!value) {
                        setState(null);
                        setAddress("");
                        return;
                    }
                    setState(value)
                }}
            />
            <TextField
                className={"my-2"}
                type={"text"}
                label={"Address"}
                value={address}
                placeholder="Enter the Address"

                onChange={(event) => {
                    if (!event.target.value) {
                        setAddress("");
                        return
                    }
                    setAddress(event.target.value);
                }}
            />
        </div>
    )
}