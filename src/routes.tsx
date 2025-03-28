import { createBrowserRouter } from 'react-router'

import OrderCreatePage from './pages/order-page/OrderCreatePage'
import ErrorIndexPage from './pages/error-page/ErrorIndexPage'
import { getMenu, getOrder } from './services/apiRestaurant'
import OrderShowPage from './pages/order-page/OrderShowPage'
import Error404Page from './pages/error-page/Error404Page'
import Homepage from './pages/home-page/Homepage'
import MenuPage from './pages/menu-page/MenuPage'
import CartPage from './pages/cart-page/CartPage'
import AppLayout from './layout/AppLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorIndexPage />,
    children: [
      {
        path: '/',
        element: <Homepage />
      },
      {
        path: '/menu',
        element: <MenuPage />,
        loader: async () => await getMenu(),
        errorElement: <ErrorIndexPage />
      },
      {
        path: '/cart',
        element: <CartPage />
      },
      {
        path: '/order/new',
        element: <OrderCreatePage />
      },
      {
        path: '/order/:OrderId',
        element: <OrderShowPage />,
        loader: async ({ params }) => await getOrder(params.OrderId),
        errorElement: <ErrorIndexPage />
      },
      {
        path: '*',
        element: <Error404Page />
      }
    ]
  }
])

export default router
