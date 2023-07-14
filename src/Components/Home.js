import React from "react";
import "./Home.css";
import Header from "./Header";
import Card from "./Card";

const Home = () => {
  return (
    <div className="major-container">
      <Header screenname={<h2>IM 101</h2>} />
      <div className="C">
        <Card />
      </div>
    </div>
  );
};

export default Home;
