import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import Page from "./components/Page";
import LangAI from "./components/LangAI";

const HeaderLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/projects/:projectname",
        element: <Page />,
      },
      {
        path: "/projects/wip/LangAI",
        element: <LangAI />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/sitemap.xml",
        element: <></>,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <div>
        <React.Suspense fallback={<></>}>
          <RouterProvider router={router} />
        </React.Suspense>
        <Footer />
      </div>
    </div>
  );
}

export default App;
