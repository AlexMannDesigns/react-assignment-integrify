import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserCard from "./UserCard";
import UserProfile from "./UserProfile";
import "./App.css";

const App = () => {

  const [users, setUsers] = useState([]);

  const getUserInfo = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    setUsers(data);
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <Router>
      <Route exact path="/">
        <div className="App">
          <div className="main">
            <UserCard data={users} />
          </div>
        </div>
      </Route>
      <Route path="/users/:username">
        <UserProfile data={users} />
      </Route>
    </Router> 
  )
}

export default App;
