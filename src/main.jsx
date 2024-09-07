import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Ui/Root/Root.jsx'
import Home from './Ui/Home/Home.jsx'
import AppliedJobs from './Ui/Pages/AppliedJobs/AppliedJobs.jsx'
import ErrorPage from './Ui/Pages/ErrorPage/ErrorPage.jsx'

const router = createBrowserRouter([
     {
      path:'/',
      element:<Root/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/applied',
          element:<AppliedJobs/>
        }
      ]
     }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
