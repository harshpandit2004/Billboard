import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
function AddCard() {
  return (
    <div className = "">
      <div class="addCard">
        <label for="exampleFormControlInput1" class="form-label">
          Title:
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
            Text:
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </div>
  );
}

export default AddCard;