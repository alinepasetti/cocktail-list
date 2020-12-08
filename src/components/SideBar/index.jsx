import React, { Component, Fragment } from 'react';
import CocktailList from './../CocktailList';
import SearchBar from './../SearchBar';
import { findAllCocktails, findRandomCocktail } from './../../services/cocktails';
import { withRouter } from 'react-router';
import './style.scss';

class SideBar extends Component {
  constructor(props) {
    super(props);
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
    this.props.location.pathname.includes('/drink/')
      ? this.props.history.push(`${result.cocktail.idDrink}`)
      : this.props.history.push(`drink/${result.cocktail.idDrink}`);
  }
  render() {
  const changeMenuVisible = this.props.menuVisible;

    return (
      <aside className={`aside ${changeMenuVisible ? 'visible' : 'not-visible'}`}>
        {this.state.cocktails && (
          <Fragment>
            <div className="main__nav">
              <button className="random__button" onClick={() => this.getRandomCocktail()}>
                Get a Random Drink
              </button>
              <SearchBar getQuery={this.handleSearchFilter} inputValue={this.state.inputValue} />
            </div>
            <CocktailList changeMenuVisibleAction={this.props.changeMenuVisibleAction} cocktails={this.filteredCocktails} />
          </Fragment>
        )}
      </aside>
    );
  }
}
export default withRouter(SideBar);
