import React from "react";
import "./style.scss";

const HamburguerMenu = ({ menuVisible, changeMenuVisibleAction }) => {
  console.log(menuVisible);
  const changeMenuVisible = menuVisible;
  return (
    <img
      src="/images/cardapio.png"
      alt="menu"
      onClick={changeMenuVisibleAction}
      className={`hamburguer-menu ${
        changeMenuVisible ? "visible" : "not-visible"
      }`}
    />
  );
};

export default HamburguerMenu;
