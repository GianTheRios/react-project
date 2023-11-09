import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Button from "./button/button.jsx";
import NavBar from "./nav/nav.jsx";
import Card from "./card/Card.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <App />
    <Button />
    <div className="container">
      <Card />
      <Card />
      <Card />
    </div>
  </React.StrictMode>
);
