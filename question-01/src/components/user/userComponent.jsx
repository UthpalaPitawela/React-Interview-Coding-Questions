import React from "react";
import './userComponent.styles.scss';

export const UserComponent = (props) => {
    console.log('props', props)
    const {name, username, email, phone, website} = props.user;
    console.log('email', email)
    console.log('username', username)
    console.log('name', name)
    return (
        <div className="user">
            <div className="user-field">
                <p className="title"><strong>Name</strong></p>
                <p className="value">{name || ""}</p>
            </div>
            <div className="user-field">
                <p  className="title"><strong>Username</strong></p>
                <p  className="value">{username || ""}</p>
            </div>
            <div className="user-field">
                <p  className="title"><strong>Email</strong></p>
                <p  className="value">{email || ""}</p>
            </div>
            <div className="user-field">
                <p  className="title"><strong>Phone Number</strong></p>
                <p  className="value">{phone || ""}</p>
            </div>
            <div className="user-field">
                <p  className="title"><strong>Website</strong></p>
                <p  className="value">{website || ""}</p>
            </div>
            <hr className="ruler"/>
        </div>
    )
}