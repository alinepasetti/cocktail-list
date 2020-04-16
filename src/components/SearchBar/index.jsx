import React from 'react';

import './style.scss';

const SearchBar = (props) => {
  return (
    <input
      placeholder="Find a drink"
      value={props.inputValue}
      onChange={(e) => props.getQuery(e.target.value)}
    />
  );
};

export default SearchBar;
