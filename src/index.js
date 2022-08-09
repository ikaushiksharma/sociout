import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./utils/themeContext";
import Background from "./utils/background";
import Toggle from "./utils/themeToggle";
import "./index.css";

ReactDOM.render(
  <Router>
    <ThemeProvider>
      <Background>
        <div className="absolute right-0 top-0 md:left-20 md:top-20 md:mt-2 mr-1 mt-1">
          <Toggle />
        </div>
        <App />
      </Background>
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);
