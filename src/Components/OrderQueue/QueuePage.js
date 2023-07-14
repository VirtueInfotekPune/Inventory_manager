import React from "react";
import "./QueuePage.css";
import { Link } from "react-router-dom";
import Queuedata from "../OrderQueue/QueuepageData"
import { useParams } from "react-router-dom";

// import {useCart} from 'react-use-cart'

// const orders = [
//   {
//     id : 1,
//     orderNumber: "12345",
//     details: "Vegetables",
//   },
//   {
//     id : 2,
//     orderNumber: "23456",
//     details: "Fruits",
//   },
//   {
//     id : 3,
//     orderNumber: "34567",
//     details: "Vegetables",
//   },
//   {
//     id : 1,
//     orderNumber: "12243",
//     details: "Fruits",
//   },
//   {
//     id : 4,
//     orderNumber: "23324",
//     details: "Vegetables",
//   },
//   {
//     id : 5,
//     orderNumber: "86767",
//     details: "Fruits",
//   },
//   {
//     id : 6,
//     orderNumber: "89790",
//     details: "Vegetables",
//   },
//   {
//     id : 7,
//     orderNumber: "867637",
//     details: "Fruits",
//   },
// ];

const QueuePage = (props) => {

  // const{ removeItem, } = useCart()
  const id = useParams()

  return (
    <div className="queue-page">
      <div className="order-row">
        <div className="order-row-title">Order Number</div>
        <div className="order-row-title">Items</div>
        <div className="order-row-title">Buttons</div>
      </div>
      <div className="orders-container">
        {
        
        Queuedata.map((order) => (
          <div key={order.orderNumber} className="order-card">
            <h2>Order #{order.orderNumber}</h2>
            <p>{order.details}</p>
            <div className="btn">
              <Link to={`/orderdetail/:${order.id}`} className="update-button">
                Know More
              </Link>
              <Link to="/orderassign" className="update-button">
                Assign
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QueuePage;

























































