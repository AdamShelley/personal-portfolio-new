import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import "./App.css";
import Page from "./components/Page";
import Projects from "./components/Projects";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
        element: <Home/>,
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
        <RouterProvider router={router} />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
