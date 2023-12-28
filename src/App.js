import './App.css';
import Dashboard from "./Dashboard/Dashboard";

function App() {

    const getDtoListFromBackEnd = async () => {
    }

    return (
        <div className="App">
            <Dashboard getDtoListFromBackEnd={getDtoListFromBackEnd}/>
        </div>
    );
}

export default App;
