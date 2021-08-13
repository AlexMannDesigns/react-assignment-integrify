import React from "react";
import style from "./profile.module.css"
import { useParams } from "react-router-dom";

const UserProfile = ({ data }) => {
    const { username } = useParams();
    return (
        <div>
            {data.filter(user => user.username === username).map((user, index) => (
            <div key={index} className={style.container}>
               <ul className={style.list}>
                    <li><strong>Name:</strong> {user.name}</li>
                    <li><strong>Username:</strong> {user.username}</li>
                    <li><strong>Email:</strong> {user.email}</li>
                    <li><strong>Phone:</strong> {user.phone}</li>
                    <li><strong>Company:</strong> {user.company.name}</li>
                    <li><strong>Website:</strong> {user.website}</li>
                    <li><strong>Address:</strong></li>
                    <ul>
                        <li><em>Street:</em> {user.address.street}</li>
                        <li><em>Suite:</em> {user.address.suite}</li>
                        <li><em>City:</em> {user.address.city}</li>
                        <li><em>Zipcode:</em> {user.address.zipcode}</li>
                    </ul>
                </ul> 
            </div>
        ))}
        </div>   
    );
}

export default UserProfile;