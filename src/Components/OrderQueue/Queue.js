import React from "react";
import Sidebar from "../Sidebar";
import NavBar from "./NavBar";
import QueuePage from "./QueuePage";

const Queue = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main">
        <NavBar screenname={<h2>IM 102</h2>}/>
        <QueuePage />
      </div>
    </div>
  );
};

export default Queue;
