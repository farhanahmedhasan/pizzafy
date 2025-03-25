import { createBrowserRouter } from 'react-router'

import Homepage from './pages/home-page/Homepage'
import MenuPage from './pages/menu-page/MenuPage'
import AppLayout from './layout/AppLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Homepage />
      },
      {
        path: '/menu',
        element: <MenuPage />
      }
    ]
  }
])

export default router
