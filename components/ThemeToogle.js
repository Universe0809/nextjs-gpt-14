"use client";
import { useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const themes = {
  winter: "winter",
  dark: "dark",
};
const ThemeToogle = () => {
  const [theme, setTheme] = useState(themes.winter);

  const toogleTheme = () => {
    const newTheme = theme === themes.winter ? themes.dark : themes.winter;
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };
  return (
    <button className="btn btn-outline btn-sm" onClick={toogleTheme}>
      {theme === "winter" ? (
        <BsMoonFill className="h-4 w-4" />
      ) : (
        <BsSunFill className="h-4 w-4" />
      )}
    </button>
  );
};

export default ThemeToogle;
