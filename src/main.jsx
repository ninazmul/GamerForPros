import React from 'react'
import ReactDOM from 'react-dom/client'
import routes from './Routes/Routes';
import './index.css'
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './providers/AuthProvider';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  </React.StrictMode>
);
