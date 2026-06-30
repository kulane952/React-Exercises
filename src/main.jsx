// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import { router } from './router';
// import { RouterProvider } from 'react-router';
// // import { RouterProvider } from 'react-router-dom';

// createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );


import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import "./index.css";

import Home from "./assets/components/Exercise26/Home";
import PostDetail from "./assets/components/Exercise26/PostDetail";
import CreatePost from "./assets/components/Exercise26/CreatePost";
import Login from "./assets/components/Exercise26/Login";
import ProtectedRoute from "./assets/components/Exercise26/ProtectedRoute";
import NotFound from "./assets/components/Exercise26/NotFound";
import { AuthProvider } from "./PostsContext";
import { PostsProvider } from "./AuthContext";

// import { AuthProvider } from "./AuthContext";
// import { PostsProvider } from "./PostsContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "posts/:postId", element: <PostDetail /> },
      {
        path: "create",
        element: (
          <ProtectedRoute>
            <CreatePost />
          </ProtectedRoute>
        ),
      },
      { path: "login", element: <Login /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <PostsProvider>
        <RouterProvider router={router} />
      </PostsProvider>
    </AuthProvider>
  </React.StrictMode>
);