import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ data }) => {
    return (
        <>
        {data.map((user, index) => (
            <div key={index} className="user_card"> 
                <div className="profile_image">
                    <p>{user.name.slice(0,1)}</p>
                </div>
                <div className="details">
                    <h2>{user.name}</h2>
                    <small><em>@{user.username}</em></small>
                    <a href="http://google.com">http://{user.website}</a>
                </div>
                <Link to={`/users/${user.username}`} className="btn">MORE DETAILS</Link>
            </div>
        ))}
        </>
    )
}

export default UserCard;