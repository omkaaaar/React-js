import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import CounterApp from "./components/Counter";
import Navbar from "./components/Navbar";
import "./components/navbar.css";
// import { Children } from "react";
import Course from "./components/nestedRouting/Course";
import Results from "./components/nestedRouting/Results";
import Tests from "./components/nestedRouting/Tests";
import NotFound from "./components/NotFound";
// import Parameters from "./components/Parameters";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <HomePage />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Navbar />
        <Dashboard />
      </div>
    ),
    children: [
      {
        path: "course",
        element: <Course />,
      },
      {
        path: "results",
        element: <Results />,
      },
      {
        path: "tests",
        element: <Tests />,
      },
    ],
  },
  {
    path: "/counter",
    element: (
      <div>
        <Navbar />
        <CounterApp />
      </div>
    ),
  },
  {
    path: "/counter/:id",
    element: (
      <div>
        <Navbar />
        <CounterApp />
      </div>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <div>
      {/* <h1>React Router</h1> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
