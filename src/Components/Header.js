import React from "react";
import "./Header.css";
import { AiOutlineBars } from "react-icons/ai";

function Navbar(props) {
  const currentDate = new Date().toLocaleDateString();
  return (
    <>
      <div className="navbar-container">
        <h1>Inventory/Stock</h1>
      </div>

      <div className="sub-nav">
        <div className="date">
          <p>Date: {currentDate}</p>
        </div>
        <div className="screen-num">{props.screenname}</div>
      </div>
    </>
  );
}

export default Navbar;
