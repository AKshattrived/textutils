import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const HandleUpClick = () => {
    setText(text.toUpperCase());
  };
  const HandleLoClick = () => {
    setText(text.toLowerCase());
  };

  const HandleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={HandleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={HandleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={HandleLoClick}>
          Convert to Lowercase
        </button>
      </div>
      <div className="container my-3">
        <h2>Text Summary</h2>
        <p>
          Words:{text.split(" ").length}, Charecters:{text.length}
        </p>
      </div>
    </>
  );
}
