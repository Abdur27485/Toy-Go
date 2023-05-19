import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthProvider from './providers/AuthProvider';
import Home from './pages/Home/Home';
import AddToy from './pages/Add Toy/AddToy';
import AllToy from './pages/All Toy/AllToy';
import NotFound from './pages/Not Found/NotFound';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/addToy',
        element: <AddToy></AddToy>
      },
      {
        path: '/allToy',
        element: <AllToy></AllToy>,
      }
    ]
  },
  {
    path: '*',
    element: <NotFound></NotFound>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  </React.StrictMode>,
)
