import React, { Component } from "react";
import CocktailDetail from "../CocktailDetail";
import {
  findOneCocktail,
  findRandomCocktail,
} from "./../../services/cocktails";
import "./style.scss";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cocktail: "",
    };
  }
  componentDidMount() {
    if (this.props.history.location.pathname === "/drink/random") {
      this.fetchRandomData();
    } else {
      this.fetchData();
    }
  }
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.cocktail.idDrink !== this.props.match.params.id) {
      // if (this.props.history.location.pathname === '/drink/random') {
      // this.fetchRandomData();
      // } else {
      this.fetchData();
      // }
    }
  };

  async fetchRandomData() {
    const { cocktail, ingredients } = await findRandomCocktail();
    this.setState({ cocktail, ingredients });
  }

  async fetchData() {
    const { id } = this.props.match.params;
    const { cocktail, ingredients } = await findOneCocktail(id);
    this.setState({ cocktail, ingredients });
  }
  render() {
    return (
      <main className="main">
        {this.state.cocktail && (
          <CocktailDetail
            menuVisible={this.props.menuVisible}
            cocktail={this.state.cocktail}
            ingredients={this.state.ingredients}
          />
        )}
      </main>
    );
  }
}
