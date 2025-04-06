import React from "react";
import ReactDOM from "react-dom/client";
import App from "../App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Aboutus from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Error from "./components/Pages/Error";
import Body from "./components/home/Body";
import Resmenu from "./components/Pages/ResMenu";
import Groceries from "./components/instamart/gorceries";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: <Aboutus />,
      },
      {
        path: "/contact",
        element: <Contact />,
      }, {
        path: "restaurant/:resid",
        element : <Resmenu/>
      }
      , {
        path: "/grocery",
        element : <Groceries/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
);
