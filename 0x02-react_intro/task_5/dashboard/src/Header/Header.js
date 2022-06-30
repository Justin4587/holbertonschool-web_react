import React from "react";
import "./Header.css";
import logo from "../assets/horsefish.jpg"


function Header() {
  return (
    <div className="App-header">
      <img src={logo} className="JacksonPick" alt="jpg" />
      <h1>School dashboard</h1>
    </div>
  )
}

export default Header;
