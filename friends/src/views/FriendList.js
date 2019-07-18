import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utility/axiosWithAuth";

const FriendList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axiosWithAuth
      .get("/friends", {
        headers: {
          Authorization: token
        }
      })
      .then(res => console.log(res))
      .catch(err => console.log(err.response));
  }, []);
  return <div>FriendList</div>;
};

export default FriendList;
