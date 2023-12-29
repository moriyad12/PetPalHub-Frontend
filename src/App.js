import './App.css';
import Dashboard from "./Dashboard/Dashboard";

function App() {

    const getDtoListFromBackEnd = async (filters) => {
        // alert(JSON.stringify(filters));
    }

    return (
        <div className="App">
            <Dashboard filterEnabled={true} getDtoListFromBackEnd={getDtoListFromBackEnd}/>
        </div>
    );
}

export default App;
