import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Ui/Root/Root.jsx'
import Home from './Ui/Home/Home.jsx'
import AppliedJobs from './Ui/Pages/AppliedJobs/AppliedJobs.jsx'
import ErrorPage from './Ui/Pages/ErrorPage/ErrorPage.jsx'
import JobDetails from './Ui/Home/FeatureJobs/JobDetails.jsx'
import Blogs from './Ui/Pages/Blogs/Blogs.jsx'
import Jobs from './Ui/Pages/Jobs/Jobs.jsx'
import Statistics from './Ui/Pages/Statistics/Statistics.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/applied',
        element: <AppliedJobs>Applied job</AppliedJobs>
      },
      {
        path: '/blogs',
        element: <Blogs>Blogs</Blogs>
      },
      {
        path:'/jobs',
        element:<Jobs>Jobs</Jobs>
      },
      {
        path:'/statistics',
        element:<Statistics>Statistics</Statistics>
      },
      {
        path: '/jobDetails/:id',
        element: <JobDetails>Job Details</JobDetails>,
        loader: () => fetch('/jobs.json')
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
