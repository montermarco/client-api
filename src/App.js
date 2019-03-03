import React, { Component } from 'react';
import './App.css';
import {Switch , Route } from 'react-router-dom';
//import AddProject from './components/projects/AddProject'

import NavBar from './components/navbar/Navbar'
import ProjectList from './components/projects/ProjectList';
import ProjectDetail from './components/projects/ProjectDetail'


class App extends Component {
  render() {
    return (
      <div className="App">

        <NavBar />

        <Switch>
        <Route exact path="/projects" component={ProjectList} />
        <Route exact path="/projects/:id" component={ProjectDetail} />

        </Switch>
       
       
      </div>
    );
  }
}

export default App;
