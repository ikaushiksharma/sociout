import React from "react";
import { ThemeContext } from "./themeContext";

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className="transition duration-1000 ease-in-out rounded-full p-2">
      {theme === "dark" ? (
        <span
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-3xl cursor-pointer bg-red"
        >
          ☀️
        </span>
      ) : (
        <span
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className=" text-3xl cursor-pointer"
        >
          🌒
        </span>
      )}
    </div>
  );
};

export default Toggle;
