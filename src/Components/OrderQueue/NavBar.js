import React from "react";

const NavBar = (props) => {
  const currentDate = new Date().toLocaleDateString();
  return (
    <>
      <div className="navbar-container">
        <h1>Order Queue</h1>
      </div>
      <div className="sub-nav">
        <div className="date">
          <p>Date: {currentDate}</p>
        </div>
        <div className="screen-num">{props.screenname}</div>
      </div>
    </>
  );
};

export default NavBar;
