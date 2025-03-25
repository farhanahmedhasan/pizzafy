import { createBrowserRouter } from 'react-router'
import Homepage from './pages/homepage/Homepage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />
  }
])

export default router
