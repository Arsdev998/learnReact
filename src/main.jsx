import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import Home from "./pages/Home/Home.jsx";
import Product from "./pages/Home/Product.jsx";
import PackagesDetail from "./components/PackagesDetail.jsx";
import TestFilter from "./components/TestFilter.jsx";

const queryClient = new QueryClient({});
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: `/packagesdetail/:id`,
        element:<PackagesDetail/>
      },
      {
        path:'/test',
        element:<TestFilter/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
