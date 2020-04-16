import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export default function CocktailItem(props) {
  return (
    <Link to={`/drink/${props.id}`} className="cocktail__list-item">
      <img src={props.src} alt={props.name} />
      <h3>{props.name}</h3>
    </Link>
  );
}
