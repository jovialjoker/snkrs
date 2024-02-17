import * as React from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GeneralLayout from "./layout/General";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/Auth/Login";
import RegisterPage from "./pages/Auth/Register";
import PrivateRoute from "./components/Private";
import SneakersPage from "./pages/Sneakers/SneakersPage";
import AddSneakers from "./pages/Sneakers/AddSneakers";
import MyCart from "./pages/Cart/MyCart";


const router = createBrowserRouter([
  {
    path: "/",
    element: <GeneralLayout />,
    children: [
      {
        path: "/",
        element: (
          <MainPage />
        ),
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/sneakers",
        children: [
          {
            path: "/sneakers",
            element: <SneakersPage />
          },
          {
            path: "/sneakers/add",
            element: <PrivateRoute><AddSneakers /></PrivateRoute>
          }
        ]
      },
      {
        path: "/my-cart",
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
      }
    ]
  },
]);

export const App = () => (
  <RouterProvider router={router}></RouterProvider>
)
