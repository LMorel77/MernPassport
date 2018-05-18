import React from "react";
import { Col, Row, Wrapper } from "../../components/BootstrapGrid";
import "./Home.css"; // Home Page CSS

// Luis: Starter Code
const Home = () => (

    <Wrapper>

        <h1>Home Page.</h1>
        <br />
        <h4>Route: '/'</h4>
        <h4>Rendering:
            <ol>
                <li>Mission Statement</li>
                <li>Sign-Up Form</li>
            </ol>
        </h4>

    </Wrapper>

);

export default Home;