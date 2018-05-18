import React from "react";
import { Col, Row, Wrapper } from "../../components/BootstrapGrid";
import Team from "./Team.json"; // Developer Team Info
import "./About.css"; // About Page CSS

// Luis: Starter Code
const About = () => (

    <Wrapper>

        <h1>About Page.</h1>
        <br />
        <h4>Route: '/about'</h4>
        <h4>Rendering:
            <ol>
                <li>Developer Team Info</li>
                <li>Project Twitter Feed</li>
            </ol>
        </h4>

    </Wrapper>

);

export default About;