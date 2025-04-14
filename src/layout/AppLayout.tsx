import { Outlet, useNavigation } from 'react-router'
import { useSelector } from 'react-redux'

import AppLayoutCartOverview from './AppLayoutCartOverview'
import { getTotalPizzas } from '../features/cart/cartSlice'
import AppLayoutHeader from './AppLayoutHeader'
import Spinner from './Spinner'

export default function AppLayout() {
  const navigation = useNavigation()
  const totalPizzas = useSelector(getTotalPizzas)

  return (
    <div className="grid h-dvh grid-rows-[auto_1fr_auto]">
      <AppLayoutHeader />

      {navigation.state === 'loading' && <Spinner />}

      <main className="overflow-y-auto">
        <Outlet />
      </main>

      {totalPizzas > 0 && <AppLayoutCartOverview />}
    </div>
  )
}
