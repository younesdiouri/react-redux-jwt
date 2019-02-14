import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToggleButtonContainer from './containers/ToggleButtonContainer';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Switch, Link} from 'react-router-dom';
import SecurityContainer from "./containers/SecurityContainer";
import MovieContainer from "./containers/MovieContainer";
import ProfileBanner from "./containers/ProfileBanner";

class App extends Component {

  render() {

    const style = {
      maxHeight: 50,
      maxWidth: "100%"
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" style={style}/>
            <ToggleButtonContainer/>
            <ProfileBanner />
            <Router>
              <React.Fragment>
                  <Link to='/security/login'>Login</Link>
                  <Link to='/movies'>Movies</Link>
                <Switch>
                  <Route path="/security" component={SecurityContainer}/>
                  <Route path="/movies" component={MovieContainer}/>    
                </Switch>
              </React.Fragment>       
            </Router>
        </header>
      </div>
    );
  }
}

export default App;
