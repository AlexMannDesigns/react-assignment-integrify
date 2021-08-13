import React from "react";

const UserCard = (props) => {
    return (
        <div className="userCard">
        <div>
        <h2>{props.name}</h2>
        <small><em>@{props.username}</em></small>
        <a href="#">{props.website}</a>
        </div>
        <button>MORE DETAILS</button>
        </div>
    )
}

export default UserCard;