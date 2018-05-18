import React from "react";
import { Col, Row, Wrapper } from "../BootstrapGrid";
import "./Twitter.css"; // Twitter Feed CSS

// Luis: Starter Code
const Twitter = () => (

    <Wrapper>

        <h1>Twitter Feed</h1>
        <br />
        <h4>Route: '/about'</h4>
        <h4>Rendering Twitter Feed:
            <ol>
                <li>Header</li>
                <li>Tweets</li>
                <li>Twitter Links</li>
            </ol>
        </h4>

    </Wrapper>

);

export default Twitter;