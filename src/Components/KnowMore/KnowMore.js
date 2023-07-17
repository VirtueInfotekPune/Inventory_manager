import React from "react";
import { useParams } from "react-router-dom";
import Queuedata from "../OrderQueue/QueuepageData";
import {Link} from "react-router-dom"

const KnowMorePage = (props) => {
  const { id } = useParams();

  // Find the specific product with the given id
  const product = Queuedata.find((order) => order.id.toString() === id);

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <>
      <div className="order-card">
        {/* <h2>Order ID: {product.id}</h2> */}
        <h5>Order Number: <br/>{product.orderNumber}</h5>
        <p>Details:<br/> {product.details} </p>
        <p>Description:<br/>{product.description} </p>
        <p>Quantity: <br/>{product.quantity} </p>
        <p>Address: <br/>{product.Address} </p>
        <Link to="/orderassign" className="update-button">
                Assign
              </Link>
        {/* Display other product details as needed */}
      </div>
    </>
  );
};

export default KnowMorePage;
