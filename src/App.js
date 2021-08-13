import React, { useState } from "react";
import UserCard from "./UserCard.jsx";
import "./App.css";

const App = () => {

  const [users, setUsers] = useState([]);

  const getUserInfo = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    console.log(data);
    setUsers(data);
  }

  getUserInfo();

  return (
    <div className="App">
      <h1>Hello</h1>
      <div className="main">
        {users.map((user, idx) => (
          <UserCard 
          key={idx}
          name={user.name}
          username={user.username}
          website={user.website}
          />
        ))}
      </div>
    </div>
  )
}

export default App
