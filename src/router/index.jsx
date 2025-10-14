import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Experience from "../pages/Experience";
import Skills from "../pages/Skills";
import Qualifications from "../pages/Qualifications";
import Users from "../pages/Users";
import Login from "../pages/Login";
import { AppContextProvider } from "../context/AppContext";
import UserPatch from "../pages/UserPatch";

export const router = createBrowserRouter([
  {
    element: (
      <AppContextProvider>
        <MainLayout />
      </AppContextProvider>
    ),
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <Experience />,
        path: "/Experience",
      },
      {
        element: <Skills />,
        path: "/Skills",
      },
      {
        element: <Users />,
        path: "/Users",
      },
      {
        path: `/Users/:id`,
        element: <UserPatch />,
      },
      {
        element: <Qualifications />,
        path: "/Qualifications",
      },
    ],
  },
  {
    element: <Login />,
    path: "/login",
  },
]);
