import React from "react";

const DarkModeButton = () => {
  return (
    <fieldset
      className="header__toggle toggle"
      aria-label="theme toggle"
      role="radiogroup"
    >
      <label htmlFor="dark">
        Dark Mode
        <span className="visually-hidden">On</span>
      </label>
      <div className="toggle__wrapper">
        <input className="toggle__input" type="radio" name="theme" id="dark" />
        <input
          className="toggle__input light_input"
          type="radio"
          name="theme"
          id="light"
        />
        <span aria-hidden="true" className="toggle__background"></span>
        <span aria-hidden="true" className="toggle__button"></span>
      </div>
      <label htmlFor="light" className="visually-hidden">
        Dark Mode Off
      </label>
    </fieldset>
  );
};

export default DarkModeButton;
