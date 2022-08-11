import React from "react";
import Bills from "./Bills";
export default function BillList(props) {

  return props.billist.map((bill) => {
    return (
      <div className="individual-bill">
        <Bills key = {props.billist._id} bill={bill} />
      </div>
    );
  });
}
