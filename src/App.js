import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import NewsItem from './components/NewsItem';
export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <News pageSize={9} country="in" category="general"/>
          </Route>
          <Route path="/sports">business<News key="sports" pageSize={10} country="in" category="sports"/></Route>
          <Route exact path="/entertainment"><News key="entertainment" pageSize={10} country="in" category="entertainment"/></Route>
          <Route exact path="/general"><News key="general" pageSize={10} country="in" category="general"/></Route>
          <Route exact path="/health"><News key="health" pageSize={10} country="in" category="health"/></Route>
          <Route exact path="/science"><News key="science" pageSize={10} country="in" category="science"/></Route>
          <Route exact path="/technology"><News key="technology" pageSize={10} country="in" category="technology"/></Route>
          <Route exact path="/business"><News key="business" pageSize={10} country="in" category="business"/></Route>
        </Switch>
      
        

      </div>
      </Router>
    )
  }
}



