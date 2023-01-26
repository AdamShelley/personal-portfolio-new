import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Projects = React.lazy(() => import("./components/Projects"));
const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));
const Page = React.lazy(() => import("./components/Page"));

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
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <div>
        <React.Suspense fallback={<>...Loading </>}>
          <RouterProvider router={router} />
        </React.Suspense>
        <Footer />
      </div>
    </div>
  );
}

export default App;
