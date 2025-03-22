import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Aboutus from './components/Pages/About'
import Contact from './components/Pages/Contact'
import Error from './components/Pages/Error'

const appRouter = createBrowserRouter([
  {
      path:"/",
      element : <App/>,
      errorElement : <Error/>
  },
  {
      path:"/about",
      element : <Aboutus/>
  },
  {
    path:"/contact",
    element : <Contact/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
) 