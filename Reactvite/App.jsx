import React from "react";
import Header from "./src/components/home/Header.jsx";
import Body from "./src/components/home/Body.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
