import React from "react";
import DarkModeButton from "./DarkModeButton";

const Header = () => {
  return (
    <header className="header container">
      <div className="header__title">
        <h1>Social Media Dashboard</h1>
        <p className="text-sm font-bold dark:text-dark_text1 text-white_text1">Total Followers :23,004 Dark Mode</p>
      </div>
      <hr className="w-full h-px my-5 bg-dark_text1 border-0 dark:bg-dark_card_hover sm:hidden"/>
      <DarkModeButton />
    </header>
  );
};

export default Header;
