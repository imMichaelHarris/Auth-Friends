import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utility/axiosWithAuth";
import Friend from "../components/Friend";
import FriendForm from "../components/FriendForm";

const FriendList = () => {
  const [friends, setFriends] = useState([]);
  const [editMode, setEditMode] = useState();
  const [friendToEdit, setFriendToEdit] = useState();

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


  return (
    <div>
      {friends.map(friend => (
        <Friend friend={friend} key={friend.id} />
      ))}
      <FriendForm friends={friends} addFriend={setFriends} />
    </div>
  );
};

export default FriendList;
