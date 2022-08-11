import React, { useState } from "react";

export default function AddBills(props) {
  const [title, setTitle] = useState("");
  const [body, setbody] = useState("");

  const addBillHandler = () => {
    //adding shit to the bill list
    fetch("https://mysterious-falls-74387.herokuapp.com/addbills", {
      method: "post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Title: title,
        Body: body,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    //updating the bill list
    fetch("https://mysterious-falls-74387.herokuapp.com/fetchbills", {
      method: "get",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        data = data.reverse();
        props.setBillist(data);
      });

    //clearing out them textboxes
    document.getElementById("billtitle").value = "";
    document.getElementById("billbody").value = "";
  };

  return (
    <div className="AddBillsWalaDiv">
      Add a Bill: <br />
      <br />
      <input
        type="text"
        name="Title"
        id="billtitle"
        className="addbill-title"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        name="Body"
        id="billbody"
        className="addbill-body"
        placeholder="Body"
        onChange={(e) => setbody(e.target.value)}
      />
      <br />
      <button className="addbillhandler" onClick={addBillHandler}>
        Add
      </button>
    </div>
  );
}
