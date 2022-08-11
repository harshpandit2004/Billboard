import React from "react";

export default function Bills(props) { 
  return (
    <div>
      <p className="bill-title">{props.bill.Title}</p>
      <br />
      <p className="bill-body">{props.bill.Body}</p>
    </div>
  );
}
