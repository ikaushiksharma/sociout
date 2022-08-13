import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { gapi } from "gapi-script";
import Login from "./Components/Login";
import Home from "./Container/Home";
import About from "./Container/About.jsx";
const App = () => {
  const navigate = useNavigate();

  gapi.load("client:auth2", () => {
    gapi.client.init({
      clientId: process.env.REACT_APP_CLIENT_ID,
      scope: process.env.REACT_APP_SCOPE,
    });
  });
  useEffect(() => {
    const User =
      localStorage.getItem("user") !== "undefined"
        ? JSON.parse(localStorage.getItem("user"))
        : localStorage.clear();

    if (!User) navigate("/login");
  }, []);
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;
