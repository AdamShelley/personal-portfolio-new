import React, { useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";

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

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
  }
`;

const HeaderLayout = ({ theme, themeToggler }) => (
  <>
    <Navbar theme={theme} themeToggler={themeToggler} />
    <Outlet />
  </>
);

function App() {
  // Get theme choice from localstorage if it exists
  const localTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(localTheme || "dark");

  const themeToggler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");

    // Save theme choice to localstorage
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
  };

  const router = createBrowserRouter([
    {
      element: <HeaderLayout theme={theme} themeToggler={themeToggler} />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home theme={theme} />,
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

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />

      <div className="App">
        <div>
          <React.Suspense fallback={<></>}>
            <RouterProvider router={router} />
          </React.Suspense>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
