import React from "react";
import { Col, Row, Wrapper } from "../BootstrapGrid";
import "./DevCard.css"; // Developer Card CSS

// Luis: Starter Code
const DevCard = () => (

    <Wrapper>

        <h1>Developer Card</h1>
        <br />
        <h4>Route: '/about'</h4>
        <h4>Rendering Developer Info:
            <ol>
                <li>Image</li>
                <li>Name</li>
                <li>GitHub Url</li>
                <li>LinkedIn Url</li>
                <li>Email</li>
            </ol>
        </h4>

    </Wrapper>

);

export default DevCard;