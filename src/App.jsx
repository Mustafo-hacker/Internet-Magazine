import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          index: true,
          element: <Signup/>
        },
        {
          path:"/home",
          element: <Home/>
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/contact",
          element: <Contact/>
        },
        {
          path: "/login",
          element: <Login/>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App