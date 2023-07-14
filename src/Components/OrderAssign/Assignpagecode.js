
import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [assignedAgent, setAssignedAgent] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
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
    alert(`Order assigned to ${assignedUser.name}`);
  };

  return (
    <div>
      <h2>User List</h2>
      {assignedAgent && (
        <div>
          <h3>Assigned Agent: {assignedAgent.name}</h3>
          <p>Email: {assignedAgent.email}</p>
        </div>
      )}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button className="update-button" onClick={() => handleAssign(user.id)}>Assign</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
