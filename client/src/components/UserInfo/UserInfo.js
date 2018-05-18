import React from "react";
import { Col, Row, Wrapper } from "../BootstrapGrid";
import "./UserInfo.css"; // Profile Page User Info CSS

// Luis: Starter Code
const UserInfo = () => (

    <Wrapper>

        <h1>Profile Page User Info</h1>
        <br />
        <h4>Route: '/profile'</h4>
        <h4>Rendering Logged On User Info:
            <ol>
                <li>Image</li>
                <li>Name</li>
                <li>Email</li>
                <li>Occupation</li>
                <li>Relationship Type</li>
                <li>Location</li>
                <li>Bio</li>
            </ol>
        </h4>

    </Wrapper>

);

export default UserInfo;