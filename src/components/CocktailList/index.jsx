import React from "react";
import CocktailItem from "./../CocktailItem";
import "./style.scss";

const CocktailList = (props) => {
  return (
    <div className="cocktails__list">
      {props.cocktails.map((cocktail, i) => {
        if (i > 0) {
          return (
            <CocktailItem
              changeMenuVisibleAction={props.changeMenuVisibleAction}
              key={cocktail.strDrink}
              name={cocktail.strDrink}
              src={cocktail.strDrinkThumb}
              id={cocktail.idDrink}
            />
          );
        }
        // don't agree with this
        return null;
      })}
    </div>
  );
};

export default CocktailList;
