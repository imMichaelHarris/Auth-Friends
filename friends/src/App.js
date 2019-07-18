import React from "react";
import { Route } from "react-router-dom";
import Login from './components/Login'
import FriendList from './views/FriendList'
import "./App.css";
import PrivateRoute from "./utility/PrivateRoute";

function App() {
  return (
    <div className="App">
      <h1>Friends</h1>
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/friends" component={FriendList} />
    </div>
  );
}

export default App;
