// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const App = () => {
//   const [users, setUsers] = useState([]);
//   const [newUser, setNewUser] = useState({ name: "", email: "", gender: "" });
//   const [selectedUserId, setSelectedUserId] = useState(null);
//   const [updateData, setUpdateData] = useState({ name: "", email: "", gender: "" });

//   const baseURL = "http://localhost:8800/user"; // Update to match your backend's URL and port

//   // Fetch all users
//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get(`${baseURL}/getAll`);
//       setUsers(response.data);
//     } catch (err) {
//       console.error("Error fetching users:", err.response?.data?.message || err.message);
//     }
//   };

//   // Add a new user
//   const addUser = async () => {
//     try {
//       await axios.post(`${baseURL}/add`, newUser);
//       setNewUser({ name: "", email: "", gender: "" });
//       fetchUsers();
//     } catch (err) {
//       console.error("Error adding user:", err.response?.data?.message || err.message);
//     }
//   };

//   // Update user by ID
//   const updateUser = async () => {
//     try {
//       await axios.patch(`${baseURL}/updateById/${selectedUserId}`, updateData);
//       setSelectedUserId(null);
//       setUpdateData({ name: "", email: "", gender: "" });
//       fetchUsers();
//     } catch (err) {
//       console.error("Error updating user:", err.response?.data?.message || err.message);
//     }
//   };

//   // Delete user by ID
//   const deleteUser = async (id) => {
//     try {
//       await axios.delete(`${baseURL}/deleteById/${id}`);
//       fetchUsers();
//     } catch (err) {
//       console.error("Error deleting user:", err.response?.data?.message || err.message);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return (
//     <div>
//       <h1>User Management</h1>
//       <h2>Add User</h2>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           addUser();
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Name"
//           value={newUser.name}
//           onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={newUser.email}
//           onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
//         />
//         <select
//           value={newUser.gender}
//           onChange={(e) => setNewUser({ ...newUser, gender: e.target.value })}
//         >
//           <option value="">Select Gender</option>
//           <option value="1">Male</option>
//           <option value="0">Female</option>
    
//         </select>
//         <button type="submit">Add User</button>
//       </form>

//       <h2>Users List</h2>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             {user.name} - {user.email} - {user.gender} 
//             <button onClick={() => setSelectedUserId(user.id)}>Edit</button>
//             <button onClick={() => deleteUser(user.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>

//       {selectedUserId && (
//         <>
//           <h2>Edit User</h2>
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               updateUser();
//             }}
//           >
//             <input
//               type="text"
//               placeholder="Name"
//               value={updateData.name}
//               onChange={(e) => setUpdateData({ ...updateData, name: e.target.value })}
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               value={updateData.email}
//               onChange={(e) => setUpdateData({ ...updateData, email: e.target.value })}
//             />
//             <select
//               value={updateData.gender}
//               onChange={(e) => setUpdateData({ ...updateData, gender: e.target.value })}
//             >
//               <option value="">Select Gender</option>
//               <option value="1">Male</option>
//               <option value="0">Female</option>
           
//             </select>
//             <button type="submit">Update User</button>
//           </form>
//         </>
//       )}
//     </div>
//   );
// };

// export default App;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const App = () => {
//   const [employees, setEmployees] = useState([]);
//   const [newEmployee, setNewEmployee] = useState({
//     firstName: "",
//     lastName: "",
//     dateOfBirth: "",
//     position: "",
//     salary: "",
//     departmentID: "",
//     hireDate: ""
//   });
//   const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
//   const [updateData, setUpdateData] = useState({
//     firstName: "",
//     lastName: "",
//     dateOfBirth: "",
//     position: "",
//     salary: "",
//     departmentID: "",
//     hireDate: ""
//   });

//   const baseURL = "http://localhost:8089/employees"; // Update to match your backend's URL and port

//   // Fetch all employees
//   const fetchEmployees = async () => {
//     try {
//       const response = await axios.get(`${baseURL}/getAll`);
//       setEmployees(response.data);
//     } catch (err) {
//       console.error("Error fetching employees:", err.response?.data?.message || err.message);
//     }
//   };

//   // Add a new employee
//   const addEmployee = async () => {
//     try {
//       await axios.post(`${baseURL}/add`, newEmployee);
//       setNewEmployee({
//         firstName: "",
//         lastName: "",
//         dateOfBirth: "",
//         position: "",
//         salary: "",
//         departmentID: "",
//         hireDate: ""
//       });
//       fetchEmployees();
//     } catch (err) {
//       console.error("Error adding employee:", err.response?.data?.message || err.message);
//     }
//   };

//   // Update employee by ID
//   const updateEmployee = async () => {
//     try {
//       await axios.patch(`${baseURL}/updateById/${selectedEmployeeId}`, updateData);
//       setSelectedEmployeeId(null);
//       setUpdateData({
//         firstName: "",
//         lastName: "",
//         dateOfBirth: "",
//         position: "",
//         salary: "",
//         departmentID: "",
//         hireDate: ""
//       });
//       fetchEmployees();
//     } catch (err) {
//       console.error("Error updating employee:", err.response?.data?.message || err.message);
//     }
//   };

//   // Delete employee by ID
//   const deleteEmployee = async (id) => {
//     try {
//       await axios.delete(`${baseURL}/deleteById/${id}`);
//       fetchEmployees();
//     } catch (err) {
//       console.error("Error deleting employee:", err.response?.data?.message || err.message);
//     }
//   };

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   return (
//     <div>
//       <h1>Employee Management</h1>
//       <h2>Add Employee</h2>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           addEmployee();
//         }}
//       >
//         <input
//           type="text"
//           placeholder="First Name"
//           value={newEmployee.firstName}
//           onChange={(e) => setNewEmployee({ ...newEmployee, firstName: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Last Name"
//           value={newEmployee.lastName}
//           onChange={(e) => setNewEmployee({ ...newEmployee, lastName: e.target.value })}
//         />
//         <input
//           type="date"
//           placeholder="Date of Birth"
//           value={newEmployee.dateOfBirth}
//           onChange={(e) => setNewEmployee({ ...newEmployee, dateOfBirth: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Position"
//           value={newEmployee.position}
//           onChange={(e) => setNewEmployee({ ...newEmployee, position: e.target.value })}
//         />
//         <input
//           type="number"
//           placeholder="Salary"
//           value={newEmployee.salary}
//           onChange={(e) => setNewEmployee({ ...newEmployee, salary: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Department ID"
//           value={newEmployee.departmentID}
//           onChange={(e) => setNewEmployee({ ...newEmployee, departmentID: e.target.value })}
//         />
//         <input
//           type="date"
//           placeholder="Hire Date"
//           value={newEmployee.hireDate}
//           onChange={(e) => setNewEmployee({ ...newEmployee, hireDate: e.target.value })}
//         />
//         <button type="submit">Add Employee</button>
//       </form>

//       <h2>Employees List</h2>
//       <ul>
//         {employees.map((employee) => (
//           <li key={employee.id}>
//             {employee.firstName} {employee.lastName} - {employee.position} - {employee.salary} - {employee.departmentID} - {employee.hireDate}
//             <button onClick={() => setSelectedEmployeeId(employee.id)}>Edit</button>
//             <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>

//       {selectedEmployeeId && (
//         <>
//           <h2>Edit Employee</h2>
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               updateEmployee();
//             }}
//           >
//             <input
//               type="text"
//               placeholder="First Name"
//               value={updateData.firstName}
//               onChange={(e) => setUpdateData({ ...updateData, firstName: e.target.value })}
//             />
//             <input
//               type="text"
//               placeholder="Last Name"
//               value={updateData.lastName}
//               onChange={(e) => setUpdateData({ ...updateData, lastName: e.target.value })}
//             />
//             <input
//               type="date"
//               placeholder="Date of Birth"
//               value={updateData.dateOfBirth}
//               onChange={(e) => setUpdateData({ ...updateData, dateOfBirth: e.target.value })}
//             />
//             <input
//               type="text"
//               placeholder="Position"
//               value={updateData.position}
//               onChange={(e) => setUpdateData({ ...updateData, position: e.target.value })}
//             />
//             <input
//               type="number"
//               placeholder="Salary"
//               value={updateData.salary}
//               onChange={(e) => setUpdateData({ ...updateData, salary: e.target.value })}
//             />
//             <input
//               type="text"
//               placeholder="Department ID"
//               value={updateData.departmentID}
//               onChange={(e) => setUpdateData({ ...updateData, departmentID: e.target.value })}
//             />
//             <input
//               type="date"
//               placeholder="Hire Date"
//               value={updateData.hireDate}
//               onChange={(e) => setUpdateData({ ...updateData, hireDate: e.target.value })}
//             />
//             <button type="submit">Update Employee</button>
//           </form>
//         </>
//       )}
//     </div>
//   );
// };

// export default App;


// import React, { useState } from 'react';

// function App() {
//   // Declare a state variable to store the count value
//   const [count, setCount] = useState(0);

//   // Function to handle incrementing the count
//   const incrementCount = () => {
//     setCount(count + 1);
//   };

//   // Function to handle decrementing the count
//   const decrementCount = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div>
//       <h1>React Counter</h1>
//       <p>Count: {count}</p>
//       <button onClick={incrementCount}>Increment</button>
//       <button onClick={decrementCount}>Decrement</button>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to My Personalized React App!</h1>
                <p>Deployed with GitHub and Vercel 🚀</p>
            </header>
        </div>
    );
}

export default App;

