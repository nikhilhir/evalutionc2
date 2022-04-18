import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";

function App() {
  return (
    <div className="App">
      <button className="toggleForm">Add-House
        {/* Show text Add House or Show Rentals based on state */}

      </button>
      <AddHouse/>
     
      {/* Show component based on state */}
      <br />
      <br />
      <Rentals/>
     
    </div>
  );
}

export default App;
