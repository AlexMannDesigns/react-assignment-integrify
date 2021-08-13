import React from "react";
import { useParams } from "react-router-dom";

const UserProfile = ({ data }) => {
    const { username } = useParams();
    return (
        <div>
            {data.filter(user => user.username === username).map((user, index) => (
            <div key={index}>
               <ul>
                    <li>name: {user.name}</li>
                    <li>username: {user.username}</li>
                    <li>email: {user.email}</li>
                    <li>phone: {user.phone}</li>
                    <li>company: {user.company.name}</li>
                    <li>website: {user.website}</li>
                    <li>address:</li>
                    <ul>
                        <li>street: {user.address.street}</li>
                        <li>suite: {user.address.suite}</li>
                        <li>city: {user.address.city}</li>
                        <li>zipcode: {user.address.zipcode}</li>
                    </ul>
                </ul> 
            </div>
        ))}
        </div>   
    );
}

export default UserProfile;