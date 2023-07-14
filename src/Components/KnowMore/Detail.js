import React from "react";
import Sidebar from "../Sidebar";
import NavBar from "./NavBar";
import KnowMore from "./KnowMore";

const Queue = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main">
        <NavBar screenname={<h2>IM 107</h2>}/>
        <KnowMore />
      </div>
    </div>
  );
};

export default Queue;