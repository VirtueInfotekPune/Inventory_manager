import React from "react";
import { Link } from "react-router-dom";
import "./KnowMore.css";
import Queuedata from "../OrderQueue/QueuepageData";
import { useParams } from "react-router-dom";

// const orders = [
//   { 
//     id : 1,
//     orderNumber: "12345",
//     title: "Product 1",
//     description: "This is the description of Product 1.",
//     quantity: 5,
//     address: "123 Main Street, City, Country",
//   },
  
  
//   // Add more orders as needed
// ];

const KnowMorePage = (props) => {
  const {id} = useParams()
  console.log(id)
  return(
    <>
    {
      Queuedata.map((cval) => {

        return(
          <>
          {/* <h1 className="text-center text-info mt-4">Order Details</h1> */}
        <h1 className="text-danger">ID : {cval.id}</h1>
        <h3 className="text-center">order name{cval.orderNumber}</h3>
        <h1>Details : {cval.details}</h1>
          
          </>
        )
      })
    }


    {/* {
      Queuedata.map((cval) => {

        if(id == cval.id){

          return(
            <>
            <div  className="order-card">
            <h2>Order ID: {cval.id}</h2>
            <h2>orderNumber: {cval.orderNumber}</h2>
            <p>Details :{cval.details} </p>
            
       
            </div>
            
            
            
            </>
          )
        }
      })
    } */}
    
    
    
    </>
  )
};

export default KnowMorePage;
