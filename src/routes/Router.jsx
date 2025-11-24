import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "about",
        Component: About
      },
      {
        path: "contact",
        Component: Contact
      },
      {
        path: "register",
        Component: Register
      },
      {
        path: "login",
        Component:Login
      }
    ]
  },
]);