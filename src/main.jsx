import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Page from "./components/Page";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import "./index.css";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const HeaderLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: "/",
        element: <App/>,
      },
      {
        path: '/about',
        element: <About/>,
      },
      {
        path: '/projects',
        element: <Projects/>,
      },
      {
        path: '/contact',
        element: <Contact/>,
      }
    ],
  },

  // {
  //   path: "/",
  //   element: <App />,
  // },
  // {
  //   path: "/projects/",
  //   element: <Projects />,
  // },
  // {
  //   path: "/about/",
  //   element: <About />,
  // },
  // {
  //   path: "/contact/",
  //   element: <Contact />,
  // },
  // {
  //   path: "projects/:projectname",
  //   element: <Page />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
