import { createBrowserRouter } from 'react-router'

import OrderCreatePage, { clientCreateOrderAction } from './pages/order-page/OrderCreatePage'
import OrderShowPage, { clientUpdateOrderPriority } from './pages/order-page/OrderShowPage'
import ErrorIndexPage from './pages/error-page/ErrorIndexPage'
import { getMenu, getOrder } from './services/apiRestaurant'
import Error404Page from './pages/error-page/Error404Page'
import Homepage from './pages/home-page/Homepage'
import MenuPage from './pages/menu-page/MenuPage'
import CartPage from './pages/cart-page/CartPage'
import AppLayout from './layout/AppLayout'
import Spinner from './layout/Spinner'

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
        errorElement: <ErrorIndexPage />,
        hydrateFallbackElement: <Spinner />
      },
      {
        path: '/cart',
        element: <CartPage />
      },
      {
        path: '/order/new',
        element: <OrderCreatePage />,
        action: clientCreateOrderAction
      },
      {
        path: '/order/:OrderId',
        element: <OrderShowPage />,
        loader: async ({ params }) => await getOrder(params.OrderId),
        action: clientUpdateOrderPriority,
        errorElement: <ErrorIndexPage />,
        hydrateFallbackElement: <Spinner />
      },
      {
        path: '*',
        element: <Error404Page />
      }
    ]
  }
])

export default router
