import React from "react";
import { Col, Row, Wrapper } from "../../components/BootstrapGrid";
import "./Profile.css"; // Profile Page CSS

// Luis: Starter Code
const Profile = () => (

    <Wrapper>

        <h1>Profile Page</h1>
        <br />
        <h4>Route: '/profile'</h4>
        <h4>Rendering:
            <ol>
                <li>User Info</li>
                <li>All user posts</li>
            </ol>
        </h4>

    </Wrapper>

);

export default Profile;