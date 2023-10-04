import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import './index.scss'
import Home from "./pages/Home.tsx";
import Root from "./routes.tsx";
import ErrorPage from "./ErrorPage.tsx";
import { Projects } from "./pages/Projects.tsx";
import { Conctacts } from "./pages/Contacts.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // loader: rootLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: eventLoader,
      },
      {
        path: "/projects",
        element: <Projects />,
        // loader: eventLoader,
      },
      {
        path: "/contacts",
        element: <Conctacts />,
        // loader: eventLoader,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
