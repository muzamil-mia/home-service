import { useState } from "react";
import { ReactDOM } from "react-dom/client";
import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Signin from "./components/Signin";
import Home from "./components/Home";
import SignUp from "./components/Signup";
import Header from "./components/Header";
import Footer from "./components/Footer";
import VendorRegister from "./components/VendorRegister";
import "./index.css"

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <SignUp/>
      },
      {
        path: "/vendorregister",
        element: <VendorRegister/>
      }
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
