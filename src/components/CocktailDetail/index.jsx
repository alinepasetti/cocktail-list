import React from "react";
import "./style.scss";

const CocktailDetail = (props) => {
  const changeMenuVisible = props.menuVisible;
  const cocktail = props.cocktail;
  return (
    <section
      className={`cocktail__detail ${
        changeMenuVisible ? "not-visible" : "visible"
      }`}
    >
      <div>
        <img
          className="cocktail__img"
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
        />
        <div>
          <h1>{cocktail.strDrink}</h1>
          <p className="cocktail__category">{cocktail.strCategory}</p>
          <h3>Ingredients</h3>
          <ul>
            {props.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div>
          <h3>Steps</h3>
          {cocktail.strInstructions.split(".").map((instruction, i) => {
            if (instruction.length) {
              return (
                <p key={instruction}>
                  {i + 1}. {instruction}
                </p>
              );
            }
            // don't agree with this
            return null;
          })}
        </div>
        <div className="slide-show">
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default CocktailDetail;
