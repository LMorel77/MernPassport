import React from "react";
import { Col, Row, Wrapper } from "../BootstrapGrid";
import "./Post.css"; // User Post CSS

// Luis: Starter Code
const Post = () => (

    <Wrapper>

        <h1>User Post</h1>
        <br />
        <h4>Route: '/feed' AND '/profile'</h4>
        <h4>Rendering User Post:
            <ol>
                <li>User Image</li>
                <li>Name</li>
                <li>Post Timestamp</li>
                <li>Category</li>
                <li>Comment</li>
            </ol>
        </h4>

    </Wrapper>

);

export default Post;