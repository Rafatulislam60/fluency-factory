import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Main from "../Layout/Main";
import Classes from "../pages/Classes/Classes";
import ManageUser from "../pages/Dashboard/ManageUser/ManageUser";
import SelectedClass from "../pages/Dashboard/SelectedClass/SelectedClass";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home/Home";
import Instructor from "../pages/Instructor/Instructor";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "class",
        element: <Classes></Classes>,
      },
      {
        path: "instructor",
        element: <Instructor></Instructor>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    errorElement: <Error></Error>,
    children: [
      // admin
      {
        path: "manageUser",
        element: <ManageUser></ManageUser>,
      },

      // student
      {
        path: "selectedClass",
        element: <SelectedClass></SelectedClass>,
      },
      // {
      //   path: 'enrolledClass',
      //   element:
      // },
      // {
      //   path: 'payment-history',
      //   element:
      // }
    ],
  },
]);
