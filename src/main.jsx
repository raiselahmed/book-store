import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Components/Root/Root";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Home from "./Components/Home/Home";
import DashBoard from "./Components/Dashboard/DashBoard";
import BookDetails from "./Components/BookDetails/BookDetails";
import ListedBooks from "./Components/ListedBooks/ListedBooks";
import { ToastContainer } from "react-toastify";
import {Helmet ,HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/books/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("../public/booksData.json"),
      },
      {
        path: "/listedbooks",
        element: <ListedBooks></ListedBooks>,
        //worst way to load some data
        loader: () => fetch("../public/booksData.json"),
      },
      {
        path: "dashboard",
        element: <DashBoard></DashBoard>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <HelmetProvider>
   <RouterProvider router={router} />
    <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
   </HelmetProvider>
  </StrictMode>
);
