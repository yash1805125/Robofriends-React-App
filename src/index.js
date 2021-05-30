import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import Hello from "./Hello";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
// import Card from "./Card";
// import CardList from "./Cardlist";
import App from "./containers/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") //Mounting the App into the html file.
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
