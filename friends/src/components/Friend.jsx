import React from 'react';

const Friend = (props) => {
    const {name, age, email} = props.friend
    return (
        <div>
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{email}</p>
            <button>Edit</button>
        </div>
    );
};

export default Friend;