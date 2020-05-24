import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Home from './pages/Home/Home';
import SingleFullVenue from './pages/SingleFullVenue/SingleFullVenue';


class App extends Component {
  render(){
    return (
       <Router>
         <Route path='/' component={NavBar} />
         <Route exact path='/' component={Home} />
         <Route exact path="/venue/:vid" component={SingleFullVenue} />
       </Router>
    )
  }
}

export default App;
