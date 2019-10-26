import React from "react";

const Friend = props => {
  const { name, age, email } = props.friend;

  const startEdit = () => {
    props.setEditMode(true);
    props.setFriendToEdit(props.friend);
  };
  return (
    <div className="friend">
      <aside className="main">
        <h2>{name}</h2>
      </aside>
      <aside>
        <p>{age}</p>
        <p>{email}</p>
        <button onClick={startEdit}>Edit</button>
      </aside>
    </div>
  );
};

export default Friend;
