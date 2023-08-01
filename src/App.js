import React from "react";
import Dashboard from "./routes/Dashboard";
import OrderQueue from "./routes/OrderQueue";
import Detail from "./routes/Detail";
import { Routes, Route } from "react-router-dom";
import Assignment from "./routes/Assignment";
// import knowMore from "./Components/KnowMore/KnowMore"

function App() {



  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/orderdetail/:id" element={<Detail />} />
        <Route exact path="/orderqueue" element={<OrderQueue />} />
        <Route exacy path="/orderassign" element={<Assignment />} />
      </Routes>
    </div>
  ); 
}

export default App;
