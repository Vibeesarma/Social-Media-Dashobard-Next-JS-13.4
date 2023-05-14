import React from "react";
import DarkModeButton from "./DarkModeButton";

const Header = () => {
  return (
    <header className="header container">
      <div className="header__title">
        <h1>Social Media Dashboard</h1>
        <p className="text-sm font-bold text-dark_text1">Total Followers :23,004 Dark Mode</p>
      </div>
      <DarkModeButton />
    </header>
  );
};

export default Header;
