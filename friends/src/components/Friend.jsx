import React from 'react';

const Friend = (props) => {
    const {name, age, email,} = props.friend
    
    const startEdit = () => {
        props.setEditMode(true);
        props.setFriendToEdit(props.friend);
    }
    return (
        <div>
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{email}</p>
            <button onClick={startEdit}>Edit</button>
        </div>
    );
};

export default Friend;