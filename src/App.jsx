import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import Homepage from "./components/Homepage";
import HamburguerMenu from "./components/HamburguerMenu";

class App extends Component {
  state = {
    menuVisible: false,
  };

  changeMenuVisible = () => {
    console.log("clicke", this.state.menuVisible);
    this.setState((prevState) => ({
      menuVisible: !prevState.menuVisible,
    }));
  };

  render() {
    return (
      <div className="App">
        <SideBar
          changeMenuVisibleAction={this.changeMenuVisible}
          menuVisible={this.state.menuVisible}
        />
        <HamburguerMenu
          menuVisible={this.state.menuVisible}
          changeMenuVisibleAction={this.changeMenuVisible}
        />
        <Route path="/" exact render={(props) => <Homepage {...props} />} />
        <Route
          path="/drink/:id"
          render={(props) => (
            <Main {...props} menuVisible={this.state.menuVisible} />
          )}
        />
      </div>
    );
  }
}

export default App;
