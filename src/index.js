import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./App.css";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const MainPage = lazy(() => import("./components/Blog/Main"));
const ErrorPage = lazy(() => import("./components/Layout/ErrorPage"));
const AddBlogPage = lazy(() => import("./components/Blog/Form/Main"));
const Homepage = lazy(() => import("./pages/Homepage"));
const Blogpage = lazy(() => import("./pages/Blogpage"));

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/homepage",
    element: <Homepage />,
  },
  {
    path: "/blog-page",
    element: <Blogpage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: root,
    errorElement: <ErrorPage />,
  },
  {
    path: "blog/:id",
    element: <AddBlogPage />,
    errorElement: <ErrorPage />,
  },
]);

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router}>
        <Suspense fallback={<ErrorPage />}>
          <App />
        </Suspense>
      </RouterProvider>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
