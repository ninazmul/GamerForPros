import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import LogIn from "../pages/Log-Reg/LogIn";
import SignUp from "../pages/Log-Reg/SignUp";
import CartDetails from "../pages/CartDetails";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";
import FAQ from "../pages/FAQ";
import Profile from "../pages/Profile";
import Errorpage from "../pages/ErrorPage/Error";

const routes = createBrowserRouter([
  {
    path: "/",
        element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/data/:id",
        element: (
          <PrivateRoute>
            <CartDetails></CartDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: (
          <PrivateRoute>
            <Contact></Contact>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
        },
        {
            path: "/faQ",
            element: <FAQ></FAQ>
        },
        {
            path: '/profile',
            element: (<PrivateRoute>
                <Profile></Profile>
            </PrivateRoute>)
        }
    ],
  },
]);
export default routes;