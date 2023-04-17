import { React, useState, useEffect } from "react";
import AddBills from "./components/AddBills";
import BillList from "./components/BillList";
import Navbar from "./components/Navbar";

function App() {
  const [billist, setBillist] = useState([]);

  useEffect(() => {
    fetch("https://poised-bear-purse.cyclic.app/fetchbills", {
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
      <Navbar/>
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
