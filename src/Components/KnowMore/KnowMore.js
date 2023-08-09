import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import axios from "axios";

const KnowMorePage = ({ products }) => {
  const { id } = useParams();
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedAgentId, setSelectedAgentId] = useState(null);
  const [agents, setAgents] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderPlaced2, setOrderPlaced2] = useState(false);

  // console.log(agents)

  console.log('vedant',selectedItems)


  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await axios.get("https://adminpr.onrender.com/api/delivpar/");
        setAgents(response.data);
      } catch (error) {
        console.error("Error fetching agents:", error);
      }
    };

    fetchAgents();
  }, []); // Empty dependency array to run the effect only once on mount





  if (!products || products.length === 0) {
    return <p>Loading...</p>;
  }

  const product = products.find((p) => p.id == id);

  if (!product) {
    return <p>Product details not found.</p>;
  }
  const handleAddToOrder = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

  const handleAgentSelection = (event) => {
    setSelectedAgentId(event.target.value);
  };





  // Function to handle sending the order to the API
  // Function to handle sending the order to the API
  const sendOrderToAPI = async () => {
    try {
      if (!selectedAgentId) {
        setOrderPlaced2(true);
        setTimeout(() => {
          setOrderPlaced2(false);
        }, 4000);
        return;
      }

      const orderData = {
        ordered_on: product.ordered_on,
        totalPrice: product.totalPrice,
        deliveryAddress: product.deliveryAddress,
        items: selectedItems,
        agentId: selectedAgentId,
      };

      console.log("Order to send:", orderData);

      const response = await axios.post("https://node-api-da.onrender.com/orders", orderData);

      if (response.status === 200) {
        setOrderPlaced(true);
        setTimeout(() => {
          setOrderPlaced(false);
        }, 5000);
        // Handle success, show success message or redirect to a success page
      } else {
        console.error("Error sending order:", response.data.error);
        // Handle error, show error message
        setOrderPlaced(false);
        setOrderPlaced2(false);
        // alert("Error sending order. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending order:", error);
      // Handle error, show error message
      setOrderPlaced(false);
      setOrderPlaced2(false);
      // alert("Error sending order. Please try again later.");
    }
  };

  return (
    <>
      {/* <h1>order details</h1> */}
      <div className="order-card1 mt-3 bg-white w-auto">
        <h4>Order ID: {product.id}</h4><hr />
        <h4>Total price:{product.totalPrice}</h4><hr />
        <h4>Address:{product.deliveryAddress}</h4><hr />
        {Array.isArray(product.items) && product.items.length > 0 ? (
          <>
            <h3 className="">All Items:</h3>
            <ul>
              {product.items.map((item, index) => (
                <li key={index}>
                  <p>Product Name: {item.productname}</p>
                  <p>Quantity: {item.quantity}{item.uom}</p>
                  <p>Product Price: {item.productprice}</p>
                  <p>Subcategory: {item.subcategory}</p>
                  <p>Offer: {item.offer}</p>
                  <p>Image: {item.image}</p>
                  <button onClick={() => handleAddToOrder(item)}
                    className="update-button"
                  >Add to Order</button><hr />

                </li>
              ))}
            </ul>


            {selectedItems.length > 0 && (
              <>
                <h3>Selected Items for Order:</h3>
                <ul>
                  {selectedItems.map((item, index) => (
                    <li key={index}>
                      <p>Product Name: {item.productname}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Product Price: {item.productprice}{item.uom}</p>
                      <p>Subcategory: {item.subcategory}</p>
                      <p>Offer: {item.offer}</p>
                      <p>Image: {item.image}</p>
                    </li>
                  ))}
                </ul>

                <h3>Select an Agent:</h3>
                <select onChange={handleAgentSelection} value={selectedAgentId} className="update-button-list">
                  <option value="">Select an agent</option>
                  {agents.map((agent) => (
                    <option key={agent.id} value={agent.id}>
                      {agent.name}
                      <option>{agent.firstname}</option><hr />
                    </option>


                  ))}





                </select><br></br><br></br>
                <button onClick={sendOrderToAPI} className="update-button w-auto text-center">Send Order</button><br></br><br></br>


              </>
            )}




          </>
        ) : (
          <p>No items found for this product.</p>
        )}
        {/* <Link  className="update-button"
        onClick={() => handleAddToOrder(item)}
        > 
        
        Add to Order
        </Link> */}
        {orderPlaced2 && (
          <div className="cart-message2">
            <p className="order-ss"
              style={{ backgroundColor: "red", width: "50%", color: "#ffff", position: "absolute", marginTop: "-820px", width: "auto", textAlign: "center", borderRadius: "2px", }}

            > Please select an agent before sending the order.</p>
          </div>
        )}

        {orderPlaced && (
          <div className="cart-message">
            <p> Order sent successfully!</p>
          </div>
        )}
      </div>
    </>
  );
};

export default KnowMorePage;
