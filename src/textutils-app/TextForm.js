import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convert to upper caser", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convert to lower caser", "success");
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared", "success");
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed", "success");
  };

  return (
    <>
      <div className=" container mb-3">
        <h1>{props.headline}</h1>
        {/* <label htmlFor="myBox" className="form-label"></label> */}
        <textarea
          value={text}
          name=""
          id="myBox"
          cols="20"
          rows="6"
          className="form-control"
          onChange={handleOnChange}
          placeholder="Enter you text here..."
          style={{
            backgroundColor: props.mode === "dark" ? "#13466e" : "white",
            color: props.mode === "dark" ? "white" : "#042743",
          }}
        ></textarea>

        <div className="d-flex flex-wrap gap-2 mt-3">
          <button className="btn btn-danger btn-sm" onClick={handleUpClick}>
            Convert to Uppercase
          </button>

          <button className="btn btn-danger btn-sm" onClick={handleLoClick}>
            Convert to Lowercase
          </button>

          <button
            className="btn btn-danger btn-sm text-white"
            onClick={handleClear}
          >
            Clear
          </button>

          <button className="btn btn-danger btn-sm" onClick={handleCopy}>
            Copy Text
          </button>

          <button className="btn btn-danger btn-sm" onClick={handleExtraSpace}>
            Remove Extra Spaces
          </button>
        </div>
      </div>

      <div className="container ">
        <h1>Text summary</h1>
        <p>
          <strong>{text.split(" ").length}</strong> words,{" "}
          <strong>{text.length}</strong> characters
        </p>
        <p>
          {" "}
          <em>{0.008 * text.split(" ").length}</em> minutes read.
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter text in the box to preview it"}</p>
      </div>
    </>
  );
};

TextForm.defaultProps = { headline: "Form Title" };

export default TextForm;
