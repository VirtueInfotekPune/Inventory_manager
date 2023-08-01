import React,{useState,useEffect} from "react";
import Sidebar from "../Sidebar";
import NavBar from "./NavBar";
import KnowMore from "./KnowMore";

const Queue = () => {

  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    // Fetch data and set it in the orderData state
    const getData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/cart/api/orderlist/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }

        const json = await response.json();
        setOrderData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  return (
    <div className="container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main">
        <NavBar screenname={<h2>IM 107</h2>}/>
        <KnowMore products={orderData}  />
      </div>
    </div>
  );
};

export default Queue;