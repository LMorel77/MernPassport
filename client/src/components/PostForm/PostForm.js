import React from "react";
import { Col, Row, Wrapper } from "../BootstrapGrid";
import "./PostForm.css"; // Post Form CSS

// Luis: Starter Code
const PostForm = () => (

    <Wrapper>

        <h1>Post Form</h1>
        <br />
        <h4>Route: '/feed'</h4>
        <h4>Rendering User Post Form:
            <ol>
                <li>Comment Box/Textarea</li>
                <li>Category</li>
                <li>Submit Button</li>
            </ol>
        </h4>

    </Wrapper>

);

export default PostForm;