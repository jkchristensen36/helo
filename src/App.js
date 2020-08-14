import React from 'react';
import './App.css';
// import {Switch, Route} from 'react-router-dom';
import { withRouter } from 'react-router'
import routes from './routes';
import Nav from './Components/Nav/Nav';

class App extends React.Component {

  render() { 
    const { location } = this.props;

    return (
      <div className="App">
        {location.pathname === '/' ? (
          null
        ) : (
        <Nav/>
        )}
        {routes}
      </div>
    );  
  }
}

export default withRouter(App);