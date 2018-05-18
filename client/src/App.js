import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import API from "./utils/API";
// Luis: Modified Imports
import { NavBar } from "./components";
import { About, Feed, Home, Login, Profile } from "./pages"


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
    });
  };

  handleLogout = () => {
    API.logout()
      .then(() => {
        this.setState({
          user: null,
          loggedIn: false
        });
      });
  };

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

      // <div>
      //   <NavBar />
      //   <h1>Testing App</h1>
      // </div>
      <Router>
        <div>
          <NavBar loggedIn={this.state.loggedIn} logout={this.handleLogout} />
          <Route exact path="/" render={() => <Home loggedIn={this.state.loggedIn} user={this.state.user} />} />
          <Route exact path="/about" render={() => <About loggedIn={this.state.loggedIn} user={this.state.user} />} />
          <Route exact path="/feed" render={() => <Feed loggedIn={this.state.loggedIn} user={this.state.user} />} />
          <Route exact path="/home" render={() => <Home loggedIn={this.state.loggedIn} user={this.state.user} />} />
          <Route exact path="/login" render={() => <Login setUser={this.setUser} loggedIn={this.state.loggedIn} user={this.state.user} />} />
          <Route exact path="/profile" render={() => <Profile loggedIn={this.state.loggedIn} user={this.state.user} />} />
          {/* Other Original Franklin Routes
          <Route exact path="/signup" component={SignupForm} />
          <Route exact path="/login" render={() => <Login setUser={this.setUser} />} /> */}
        </div>
      </Router>
    );
  };

};

export default App;