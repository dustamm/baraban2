import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Panel from './pages/Panel';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/panel",
    element: <Panel />
  }
]);

root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);

