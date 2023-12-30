import {InputLabel} from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import * as React from "react";

export const Breed = ({setBreed}) => {

    const BreedsOptions = ["LABRADOR",
        "PUG",
        "GOLDEN_RETRIEVER",
        "GERMAN_SHEPHERD",
        "BEAGLE",
        "BULLDOG",
        "POODLE",
        "ROTTWEILER",
        "CHIHUAHUA",
        "DACHSHUND",
        "SHIH_TZU",
        "GREAT_DANE",
        "SIBERIAN_HUSKY",
        "FRENCH_BULLDOG",
        "POMERANIAN",
        "AUSTRALIAN_SHEPHERD",
        "YORKSHIRE_TERRIER",
        "BOXER",
        "CAVALIER_KING_CHARLES_SPANIEL",
        "BOSTON_TERRIER",
        "PEMBROKE_WELSH_CORGI",
        "SHETLAND_SHEEPDOG",
        "HAVANESE",
        "MALTESE",
        "BRITTANY",
        "WEIMARANER",
        "BERNER_SENNEN",
        "CATAHOULA_LEOPARD_DOG",
        "BICHON_FRISE",
        "BULL_TERRIER",
        "BORDER_COLLIE",
        "SHIBA_INU",
        "AKITA",
        "PAPILLON",
        "BLOODHOUND",
        "CHOW_CHOW",
        "AMERICAN_STAFFORDSHIRE_TERRIER",
        "CHINESE_SHAR_PEI",
        "DALMATIAN",
        "ENGLISH_SPRINGER_SPANIEL",
        "GERMAN_SHORTHAIRED_POINTER",
        "GREYHOUND",
        "IRISH_SETTER",
        "JACK_RUSSELL_TERRIER"]
    const planIndexMap = new Map(BreedsOptions.map((plan, index) => [plan, index]));
    const [viewedBreed, setViewedBreed] = React.useState("");


    return (
        <FormControl sx={{minWidth: 600}}>
            <InputLabel id="demo-simple-select-helper-label">Breed</InputLabel>
            <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                label="ads Plans"
                required={true}
                value={viewedBreed}

                onChange={(event) => {
                    setBreed(planIndexMap.get(event.target.value))
                    setViewedBreed(event.target.value)
                }
                }
            >
                {BreedsOptions.map((option, index) => (
                    <MenuItem key={index} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
            <FormHelperText>
                Choose The Pet Breed
            </FormHelperText>
        </FormControl>
    )
}