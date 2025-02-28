import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import Wishlist from './pages/wishlist/Wishlist'
import Cart from './pages/cart/Cart'
import Allproduct from './pages/allProduct/Allproduct'
import Info from './pages/infoPage/Info'
import Profile from './pages/profile/Profile'
import Oplata from './pages/oplata/Oplata'

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
        },
        {
          path: "/wishlist",
          element: <Wishlist/>
        },
        {
          path: "/cart",
          element: <Cart/>
        },
        {
          path:"/allProduct",
          element: <Allproduct/>
        },
        {
          path: "/infoPage/:id",
          element: <Info/>
        },
        {
          path:"/profile",
          element:<Profile/>
        },
        {
          path:"/oplata",
          element:<Oplata/>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App