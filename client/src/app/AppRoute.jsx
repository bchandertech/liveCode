import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import { lazy } from "react";
// import About from "../pages/About";
// import Contact from "../pages/Contact";
// import Login from "../pages/auth/Login";

const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Login = lazy(() => import("../pages/auth/Login"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

const AppRoute = () => {
  return <RouterProvider router={router} />;
};

export default AppRoute;
