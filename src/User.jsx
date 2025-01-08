import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "", gender: "" });
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [updateData, setUpdateData] = useState({ name: "", email: "", gender: "" });

  const baseURL = "http://localhost:3000/user"; // Update to match your backend's URL and port

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${baseURL}/getAll`);
      setUsers(response.data);
    } catch (err) {
      console.error("Error fetching users:", err.response?.data?.message || err.message);
    }
  };

  // Add a new user
  const addUser = async () => {
    try {
      await axios.post(`${baseURL}/add`, newUser);
      setNewUser({ name: "", email: "", gender: "" });
      fetchUsers();
    } catch (err) {
      console.error("Error adding user:", err.response?.data?.message || err.message);
    }
  };

  // Update user by ID
  const updateUser = async () => {
    try {
      await axios.patch(`${baseURL}/updateById/${selectedUserId}`, updateData);
      setSelectedUserId(null);
      setUpdateData({ name: "", email: "", gender: "" });
      fetchUsers();
    } catch (err) {
      console.error("Error updating user:", err.response?.data?.message || err.message);
    }
  };

  // Delete user by ID
  const deleteUser = async (id) => {
    try {
      await axios.delete(`${baseURL}/deleteById/${id}`);
      fetchUsers();
    } catch (err) {
      console.error("Error deleting user:", err.response?.data?.message || err.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User Management</h1>
      <h2>Add User</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addUser();
        }}
      >
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <select
          value={newUser.gender}
          onChange={(e) => setNewUser({ ...newUser, gender: e.target.value })}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <button type="submit">Add User</button>
      </form>

      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email} - {user.gender} 
            <button onClick={() => setSelectedUserId(user.id)}>Edit</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {selectedUserId && (
        <>
          <h2>Edit User</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              updateUser();
            }}
          >
            <input
              type="text"
              placeholder="Name"
              value={updateData.name}
              onChange={(e) => setUpdateData({ ...updateData, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              value={updateData.email}
              onChange={(e) => setUpdateData({ ...updateData, email: e.target.value })}
            />
            <select
              value={updateData.gender}
              onChange={(e) => setUpdateData({ ...updateData, gender: e.target.value })}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <button type="submit">Update User</button>
          </form>
        </>
      )}
    </div>
  );
};

export default App;
