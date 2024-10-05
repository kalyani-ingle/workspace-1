import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import './index.css'

import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Product from './components/Product.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import Footer from './components/Footer.jsx'
import Layout from './components/Layout.jsx';

import TortoiseDiyaProducts from './components/TortoiseDiyaProducts.jsx';
import ElephantDiyaProducts from './components/ElephantDiyaProducts.jsx';
import GanpatiDiyaProducts from './components/GanpatiDiyaProducts.jsx';
import PeacockDiyaProducts from './components/PeacockDiyaProducts.jsx';

import { GoogleOAuthProvider } from '@react-oauth/google';
import Cart from './components/Cart.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/product",
        element: <Product/>,
      },
      {
        path: "/product/tortoiseDiya",
        element: <TortoiseDiyaProducts/>
      },
      {
        path: "/product/ganpatiDiya",
        element: <GanpatiDiyaProducts/>
      },
      {
        path: "/product/elephantDiya",
        element: <ElephantDiyaProducts/>
      },
      {
        path: "/product/peacockDiya",
        element: <PeacockDiyaProducts/>
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/login",
        element: <Signup/>,
      },
      {
        path:'/',
        element:<Footer/>
      },

    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
  <GoogleOAuthProvider clientId="464430659737-qqop8ure6ud72u33d1bpteoskm0baq2a.apps.googleusercontent.com">
    <RouterProvider router={router} />
  </GoogleOAuthProvider>
</StrictMode>
);
