import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


import Cards from "./Components/Cards";
import AddCard from "./Components/AddCard"

function App() {
  return (
      <div className="d-flex justify-content-center">
        <AddCard/>
        <Cards/>
      </div>
  );
}

export default App;
