import React from "react";
import { Route } from "react-router-dom";
import Login from './components/Login'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route path="/friends-list" component={FriendList} />
    </div>
  );
}

export default App;
