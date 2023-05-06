import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import './index.scss';
import App from './App';
import Workspace from './components/Workspace/Workspace';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
    children: [
      {
        index: true,
        element: <Navigate to="notes" replace />,
      },
      {
        path: "notes",
        element: <Workspace type="empty" />,
      },
      {
        path: "notes/:noteId",
        element: <Workspace />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
