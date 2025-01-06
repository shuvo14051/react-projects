import { useState } from "react";
import "./textutils.css";
import TextForm from "./TextForm";
import Alert from "./Alert";

// import { BrowserRouter, Routes, Route } from "react-router-dom";

function TextUtils() {
  // const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState("");

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert("");
    }, 1500);
  };

  // const toogleMode = () => {
  //   if (mode === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "#13466e";
  //     document.body.style.color = "white";
  //     showAlert("Dark mode has been enabled", "success");
  //   } else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     document.body.style.color = "black";
  //     showAlert("Light mode has been enabled", "success");
  //   }
  // };
  return (
    <>
      <Alert alert={alert} />

      <TextForm
        headline="Text Utils App"
        // mode={mode}
        showAlert={showAlert}
      />
    </>
  );
}

export default TextUtils;
