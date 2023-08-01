import React, { useEffect, useState } from "react";
import "./QueuePage.css";
import { Link } from "react-router-dom";
// import Queuedata from "../OrderQueue/QueuepageData"
import { useParams, useNavigate } from "react-router-dom";



const QueuePage = (props) => {

  // const{ removeItem, } = useCart()
  const id = useParams()
  const navigate = useNavigate()
  const [orderData, setOrderData] = useState([]);
  // console.log(cardsData)

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
    <>
    <div className="queue-page">
      <h1 className="home">Your Orders</h1>

      {orderData.length > 0 ? (
        <div className="orders-container">
          {orderData.map((cval) =>(
            <div className="order-card" key={cval.id}>
             <h2><span className="fs-5">Order No.</span>{cval.id}</h2>
             <p><span className="fs-5">Oredr D : </span>{cval.ordered_on}</p>
             <p><span className="fs-5">Adres: </span>{cval.deliveryAddress}</p>
              {/* <h2>deliveryAddress: {cval.deliveryAddress}</h2> */}
              
              {/* Other order details here */}
              <Link to={`/orderdetail/${cval.id}`} className="update-button">
                Know More
              </Link>
              <Link to="/orderassign" className="update-button"
                  >
                  AsngtoAgent
                </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>No items found</p>
      )}
      </div>
    </>
  );
};

 
export default QueuePage;

// *********************************
// *********************************
