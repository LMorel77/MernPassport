import React from "react";
import { Col, Row, Wrapper } from "../../components/BootstrapGrid";
import "./Home.css"; // Home Page CSS

const styles = {
  header: {
    color: "green",
    borderStyle: "solid",
    borderWidth: "1px",
    textAlign: "center"
  }
}

export default ({ loggedIn = false, user }) => {
  return (
    !loggedIn ?
      <Wrapper>
        <Row>
          <Col offset={3}>
            <h1>Home/Sign-Up Page</h1>
            <br />
            <h4>Rendering:</h4>
            <h4><ol>
              <li>Mission Statement</li>
              <li>Sign-Up Form</li>
            </ol>
            </h4>
          </Col>
        </Row>
      </Wrapper>
      :
      <Wrapper>
        <Row>
          <Col>
            <h1 style={styles.header}>You are successfully logged in {user.email}!</h1>
          </Col>
        </Row>
      </Wrapper>
  );
}