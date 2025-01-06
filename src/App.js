import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import TextUtils from "./textutils-app/TextUtils";
import Todo from "./todo-app/Todo";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import CGPACalculator from "./cgpa/CGPACalculator";
import CalculatorApp from "./calculator/CalculatorApp";

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />

      {/* Jumbotron only on the main page */}
      <div className="container mt-4">
        <Routes basename="/react-projects">
          {/* Jumbotron Section on the Home Page */}
          <Route
            path="/"
            element={
              <div className="p-5 mb-4 bg-light border rounded-3">
                <h1>Welcome to My App Collection</h1>
                <p className="lead">
                  Explore a variety of useful web applications designed to make
                  your life easier! From text utilities and to-do lists to CGPA
                  calculators and advanced calculators, you can find tools to
                  simplify your daily tasks. Try them out now!
                </p>
                {/* Button to navigate to the Home component */}
                <Link to="/home" className="btn btn-primary">
                  Explore collections
                </Link>
              </div>
            }
          />

          {/* Other Pages without the Jumbotron */}
          <Route path="/text-utils" element={<TextUtils />} />
          <Route path="/todo" element={<Todo />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/react-projects" element={<Home />} />
          <Route path="/cgpa" element={<CGPACalculator />} />
          <Route path="/calculator" element={<CalculatorApp />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
