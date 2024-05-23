import React from "react"
import ReactDOM from "react-dom/client"
import { Toaster } from "sonner"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import "./index.css"
import RootLayout from "./components/layout/root-layout"
import Home from "./components/pages/home"
import ListedBooks from "./components/pages/listed-books"
import BookDetails from "./components/pages/book-details"
import NotFoundPage from "./components/pages/not-found"
import PagesToRead from "./components/pages/pages-to-read"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/book/:bookId",
        element: <BookDetails />,
        loader: () => fetch("/db.json"),
      },
      {
        path: "/listed-books",
        element: <ListedBooks />,
        loader: () => fetch("/db.json"),
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead />,
        loader: () => fetch("/db.json"),
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster
      position="bottom-center"
      duration={1000}
    />
    <RouterProvider router={router} />
  </React.StrictMode>
)
