import './App.css';

import Pet from "./Pet/Pet";
import PetHeader from "./Headers/PetHeader";
import ApplicationHeader from "./Headers/ApplicationHeader";
import Shelter from "./Shelter/Shelter";
import Dashboard from "./Dashboard/Dashboard";
import {Route , Routes} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
    const getDtoListFromBackEnd = async (filters) => {
        // alert(JSON.stringify(filters));
    }
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path={"/"} element={<Dashboard filterEnabled={true} getDtoListFromBackEnd={getDtoListFromBackEnd} viewComponentIndex={1}/>} />
                <Route path={"/petview"} element={<Pet />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
