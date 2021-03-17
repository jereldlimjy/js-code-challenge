import './App.css';
import Particles from 'react-particles-js';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Send from './components/Send';
import Register from './components/Register';
import SignIn from './components/SignIn';

const particlesOptions = {
  particles: {
    line_linked: {
      color: {
        value: '#000'
      },
    },
    number: {
      value: 70,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  state = {
    alert: null,
    isSignedIn: false,
  }

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    
    setTimeout(() => {
			this.setState({ alert: null })
		}, 3000);
  }

  signIn = () => {
    this.setState({ isSignedIn: true });
  }

  signOut = () => {
    this.setState({ isSignedIn: false });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Particles className="particles" params={particlesOptions}/>
          <Navbar isSignedIn={this.state.isSignedIn} signOut={this.signOut}/>
          <Alert alert={this.state.alert}/>
          <Switch>
            <Route exact path="/" render={() => {
              return (this.state.isSignedIn 
                ? <Redirect to="/send"/>
                : <Redirect to="/signin"/>)
            }} />
            <Route exact path="/register">
              <Register setAlert={this.setAlert}/>
            </Route>
            <Route exact path="/signin">
              { this.state.isSignedIn ?
                <Send setAlert={this.setAlert} isSignedIn={this.state.isSignedIn}/>
                : <SignIn setAlert={this.setAlert} signIn={this.signIn}/>
              }
            </Route>
            <Route exact path ="/send">
              <Send setAlert={this.setAlert} isSignedIn={this.state.isSignedIn}/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
