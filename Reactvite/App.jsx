import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/home/Header.jsx";
import Body from "./src/components/home/Body.jsx";


const AppComponent = () => (
    <div className="app">
        <Header />
        <Body />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);