import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import CocktailList from './../CocktailList';
import SearchBar from './../SearchBar';
import { findAllCocktails, findRandomCocktail } from './../../services/cocktails';
import './style.scss';

export default class SideBar extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      cocktails: [],
    };
    this.handleSearchFilter = this.handleSearchFilter.bind(this);
    this.getRandomCocktail = this.getRandomCocktail.bind(this);
  }
  handleSearchFilter(query) {
    this.setState({ inputValue: query });
  }
  get filteredCocktails() {
    const filteredCocktails = this.state.cocktails.filter((cocktail) => {
      return cocktail.strDrink.toLowerCase().includes(this.state.inputValue.toLowerCase());
    });
    return filteredCocktails;
  }
  componentDidMount() {
    this.fetchData();
  }
  async fetchData() {
    const cocktails = await findAllCocktails();
    this.setState({ cocktails });
  }
  async getRandomCocktail() {
    const result = await findRandomCocktail();
    console.log(result.idDrink, this.props.history);
    return `drink/${result.idDrink}`;
  }
  render() {
    return (
      <aside className="aside">
        {this.state.cocktails && (
          <Fragment>
            <div className="main__nav">
              <Link className="random__button" to={this.getRandomCocktail}>Get a Random Drink</Link>
              <SearchBar getQuery={this.handleSearchFilter} inputValue={this.state.inputValue} />
            </div>
            <CocktailList cocktails={this.filteredCocktails} />
          </Fragment>
        )}
      </aside>
    );
  }
}
