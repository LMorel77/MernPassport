import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import API from "./utils/API";
// Luis: Original Franklin Import
// import {Navbar, Home, SignupForm, Login} from "./components";
// Luis: Modified Imports


class App extends React.Component {
  state = {
    loggedIn: false,
    user: null,
    email: "",
    password: "",
  }

  setUser = (user) => {
    console.log("USER", user);
    this.setState({
      user,
      loggedIn: true
    })
  }

  handleLogout = () => {
    API.logout()
    .then(() => {
      this.setState({
        user: null,
        loggedIn: false
      });
    });
  }

  componentDidMount() {
    API.getCurrentUser()
    .then(res => {
      this.setState({
        user: res.data.user,
        loggedIn: res.data.user || false
      })
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar loggedIn={this.state.loggedIn} logout={this.handleLogout}/>
          <Route exact path="/" render={() => <Home loggedIn={this.state.loggedIn} user={this.state.user}/>} />
          <Route exact path="/signup" component={SignupForm} />
          <Route exact path="/login" render={() => <Login setUser={this.setUser} />} />
        </div>
      </Router>
    );
  }
}

export default App;
