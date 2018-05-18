import React from "react";
import { Col, Row, Wrapper } from "../../components/BootstrapGrid";
import "./Feed.css"; // Feed Page CSS

// Luis: Starter Code
const Feed = () => (

    <Wrapper>

        <h1>Feed Page</h1>
        <br />
        <h4>Route: '/feed'</h4>
        <h4>Rendering:
            <ol>
                <li>Post Category Buttons</li>
                <li>Feed with all user posts</li>
                <li>New Post Form</li>
            </ol>
        </h4>

    </Wrapper>

);

export default Feed;