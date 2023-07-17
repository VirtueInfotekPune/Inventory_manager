import React, { useState, useEffect } from "react";
import axios from "axios";
import { Alert } from "react-bootstrap";
import { BsFillPersonFill } from "react-icons/bs";
import "./AssignPage.css";
import { Link, useParams } from "react-router-dom";

function AssignPage() {
  const { orderNumber } = useParams();

  const [users, setUsers] = useState([]);
  const [assignedAgent, setAssignedAgent] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://adminpr.onrender.com/api/delivpar/"
      );
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleAssign = (userId) => {
    const assignedUser = users.find((user) => user.id === userId);
    setAssignedAgent(assignedUser);
    setUsers(users.filter((user) => user.id !== userId));
    setShowAlert(true);
  };

  return (
    <div className="agent-page">
      <h1>Select a Delivery Agent</h1>

      {assignedAgent && (
        <div>
          {showAlert && (
            <Alert
              className="text-danger fw-bold text-center"
              variant="success"
              onClose={() => setShowAlert(false)}
              dismissible
            >
              <BsFillPersonFill  className="text-profile text-center" /><img src="{assignedAgent.agentimage}"></img> Order Assigned To {assignedAgent.firstname} 
            </Alert>
          )}
        </div>
      )}

      <div className="agent-list">
        {users.map((user) => (
          <div key={user.id} className="agent-card">
            <div className="agent-info">
              <h2>
              <img src="{user.agentimage}"/>
                <BsFillPersonFill /> {user.firstname}
              </h2>
              <p>{user.location}</p>
              <button
                className="update-button"
                onClick={() => handleAssign(user.id)}
              >
                Assign Order {orderNumber}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AssignPage;
