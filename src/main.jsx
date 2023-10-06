import React from 'react'
import ReactDOM from "react-dom/client"
import './index.css'
import App from './App';
import {routes} from "./routes/Router"
import {
  createBrowserRouter,
  // RouterProvider
} from "react-router-dom";
const router = createBrowserRouter(routes);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <App/>
     {/* <RouterProvider router={router} /> */}
  </React.StrictMode>,
);
