"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DarkModeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <fieldset
      onChange={(e: any) => setTheme(e.target.value)}
      className="header__toggle toggle mr-0 justify-items-end"
      aria-label="theme toggle"
      role="radiogroup"
    >
      <label htmlFor="dark" className="sm:relative sm:left-9 w-full pl-3">
        Dark Mode
        <span className="visually-hidden">On</span>
      </label>
      <div className="toggle__wrapper">
        <input
          className="toggle__input"
          type="radio"
          name="theme"
          id="dark"
          defaultChecked={currentTheme === "dark"}
          value={"dark"}
        />
        <input
          className="toggle__input light_input"
          type="radio"
          name="theme"
          id="light"
          defaultChecked={currentTheme === "light"}
          value={"light"}
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
