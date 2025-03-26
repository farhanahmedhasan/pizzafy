import { createBrowserRouter } from 'react-router'

import { getMenu } from './services/apiRestaurant'
import Homepage from './pages/home-page/Homepage'
import MenuPage from './pages/menu-page/MenuPage'
import CartPage from './pages/cart-page/CartPage'
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
        element: <MenuPage />,
        loader: async () => await getMenu()
      },
      {
        path: '/cart',
        element: <CartPage />
      }
    ]
  }
])

export default router
