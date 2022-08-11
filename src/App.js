import { React, useState, useEffect } from "react";
import AddBills from "./components/AddBills";
import BillList from "./components/BillList";

function App() {
  const [billist, setBillist] = useState([]);

  useEffect(() => {
    fetch("https://mysterious-falls-74387.herokuapp.com/fetchbills", {
      method: "get",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        data = data.reverse();
        setBillist(data);
        
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Heading">Communist Billboard</h1>
        <AddBills setBillist={setBillist} />
        <br />
        <br />
        <div className="billist">
          <BillList billist={billist} />
        </div>
        <br />
        <br />
      </header>
    </div>
  );
}

export default App;
