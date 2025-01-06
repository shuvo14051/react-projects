import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CalculatorApp = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        const evaluatedResult = eval(expression);
        setResult(evaluatedResult.toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setExpression("");
      setResult("");
    } else {
      setExpression(expression + value);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Calculator</h1>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card bg-black text-white">
            <div className="card-body">
              <input
                type="text"
                value={result || expression}
                className="form-control text-right text-white bg-black border-0"
                readOnly
              />
              <div className="row mt-3">
                <div className="col-3">
                  <button
                    className="btn btn-secondary w-100"
                    onClick={() => handleButtonClick("C")}
                  >
                    C
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-secondary w-100"
                    onClick={() => handleButtonClick("+/-")}
                  >
                    +/-
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-secondary w-100"
                    onClick={() => handleButtonClick("%")}
                  >
                    %
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-warning w-100"
                    onClick={() => handleButtonClick("/")}
                  >
                    /
                  </button>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-3">
                  <button
                    className="btn btn-secondary w-100"
                    onClick={() => handleButtonClick("7")}
                  >
                    7
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-secondary w-100"
                    onClick={() => handleButtonClick("8")}
                  >
                    8
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-secondary w-100"
                    onClick={() => handleButtonClick("9")}
                  >
                    9
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-warning w-100"
                    onClick={() => handleButtonClick("*")}
                  >
                    *
                  </button>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-3">
                  <button
                    className="btn btn-secondary w-100"
                    onClick={() => handleButtonClick("4")}
                  >
                    4
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-secondary w-100"
                    onClick={() => handleButtonClick("5")}
                  >
                    5
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-secondary w-100"
                    onClick={() => handleButtonClick("6")}
                  >
                    6
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-warning w-100"
                    onClick={() => handleButtonClick("-")}
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-3">
                  <button
                    className="btn btn-secondary w-100"
                    onClick={() => handleButtonClick("1")}
                  >
                    1
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-secondary w-100"
                    onClick={() => handleButtonClick("2")}
                  >
                    2
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-secondary w-100"
                    onClick={() => handleButtonClick("3")}
                  >
                    3
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-warning w-100"
                    onClick={() => handleButtonClick("+")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-6">
                  <button
                    className="btn btn-secondary w-100"
                    onClick={() => handleButtonClick("0")}
                  >
                    0
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-secondary w-100"
                    onClick={() => handleButtonClick(".")}
                  >
                    .
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-warning w-100"
                    onClick={() => handleButtonClick("=")}
                  >
                    =
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorApp;
