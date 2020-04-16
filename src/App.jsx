import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <Route path="/drink/:id" render={(props) => <Main {...props} />} />
      </div>
    );
  }
}

export default App;
