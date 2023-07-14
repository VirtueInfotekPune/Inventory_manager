import React from "react";
import Sidebar from "../Sidebar";
// import sidebar from "../Sidebar"
import AssignBar from "./AssignBar";
import AssignPage from "./AssignPage";

const Queue = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main">
        <AssignBar screenname={ <h2>IM104</h2>} />
        <AssignPage />
      </div>
    </div>
  );
};

export default Queue;
