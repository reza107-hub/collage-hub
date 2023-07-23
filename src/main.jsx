import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layouts/Main/Main";
import Home from "./Pages/Home/Home/Home";
import CollegeDetails from "./Pages/CollegeDetails/CollegeDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Colleges from "./Pages/Colleges/Colleges";
import Admission from "./Pages/Admission/Admission";
import AdmissionForm from "./Pages/Admission/AmissionForm";
import Login from "./Pages/Login/Login";
import AuthProvider from "./Provider/AuthProvider";
import Register from "./Pages/Register/Register";
import UserDetails from "./Pages/UserDetails/UserDetails";
import PrivateRoute from "./Routes/PrivateRoutes";
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/college-details/:id",
        element: <CollegeDetails />,
      },
      {
        path: "/colleges",
        element: <Colleges />,
      },
      {
        path: "/admission",
        element: <Admission />,
      },
      {
        path: "/admission/:id",
        element: <AdmissionForm />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/user",
        element: (
          <PrivateRoute>
            <UserDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
