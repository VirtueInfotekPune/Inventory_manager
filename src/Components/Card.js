import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Card.css";
import Alert from "./Alert";



const Card = ({ id, obj, productname, quantity, image,showAlert }) => {

  
  const [Quantity, setQuantity] = useState(quantity);
  const [objn, setobjn] = useState(obj)

  const increaseQuantity = () => {
    setQuantity(parseInt(Quantity) + 1);
  };

  const decreaseQuantity = () => {
    if (parseInt(Quantity) > 0) {
      setQuantity(parseInt(Quantity) - 1);
    }
  };



  const updateStock = () => {
    console.log(Quantity)
    console.log(objn)
    // axios.patch(`https://adminlm.onrender.com/api/stock/${obj.id}`, {
    //   quantity: Quantity
    // })

    axios.patch(`https://adminlm.onrender.com/api/stock/${obj.id}`,{
      quantity : Quantity
    })

    

      .then((response) => {
        console.log(response);
        showAlert(`${productname} Stock Updated Successfully!!`, "success")
      })
      .catch((error) => {
        console.log("Error : \n" + error)
        showAlert(`${productname} Stock Update Failed!!`, "danger")

    })
  }

  // const updateStock = () => {
  //   console.log(Quantity);
  //   console.log(objn);
  
  //   axios
  //     .patch(`https://adminlm.onrender.com/api/stock/${obj.id}`, {
  //       quantity: Quantity
  //     })
  //     .then((response) => {
  //       console.log(response);
  //       showAlert(`${objn.productname} Stock Updated Successfully!!`, "success"); // Update success message
  //     })
  //     .catch((error) => {
  //       console.log("Error : \n" + error);
  //       showAlert(`${objn.productname} Stock Update Failed!!`, "danger"); // Update failure message
  //     });
  // };




  

  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-title">{productname}</h3>
        <div className="quantity-control">
          <button className="quantity-button" onClick={decreaseQuantity}>
            -
          </button>
          <p className="card-quantity">{Quantity}Kg in stock</p>
          <button className="quantity-button" onClick={increaseQuantity}>
            +
          </button>
        </div>
        <Link to="/" className="heading">
          <button className="update-button" onClick={updateStock}>Update Stock</button>
        </Link>
      </div>
      {/* <img src={obj.image} alt={productname} /> */}
    </div>
  );
};

const Cards = () => {

  const [alertval, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    axios.get("https://adminlm.onrender.com/api/product/")
      .then(response => {
        console.log(response.data);
        setCardsData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="cards">
      <Alert alert={alertval} />
      {cardsData.map((card) => (
        <Card
          key={card.id}
          obj={card}
          id={card.id}
          productname={card.productname}
          quantity={card.quantity}
          showAlert={showAlert}
        />
      ))}
    </div>
  );
};

const Last = () => {
  return (
    <div className="container-main">
      <div className="content">
        <Cards />
      </div>
    </div>
  );
};

export default Last;






