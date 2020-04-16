import React, { Component } from 'react';
import CocktailDetail from '../CocktailDetail';
import { findOneCocktail } from './../../services/cocktails';
import './style.scss';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cocktail: '',
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.cocktail.idDrink !== this.props.match.params.id) {
      this.fetchData();
    }
  };

  async fetchData() {
    const { id } = this.props.match.params;
    const { cocktail, ingredients } = await findOneCocktail(id);
    this.setState({ cocktail, ingredients });
  }
  render() {
    return (
      <main className="main">
        {this.state.cocktail && (
          <CocktailDetail cocktail={this.state.cocktail} ingredients={this.state.ingredients} />
        )}
      </main>
    );
  }
}
