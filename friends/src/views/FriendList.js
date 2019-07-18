import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utility/axiosWithAuth";
import Friend from "../components/Friend";
import FriendForm from "../components/FriendForm";

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
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => console.log(err.response));
  }, []);
  console.log(friends);
  return (
    <div>
      {friends.map(friend => (
        <Friend friend={friend} key={friend.id} />
      ))}
      <FriendForm friends={friends} />
    </div>
  );
};

export default FriendList;
