import { Outlet, useNavigation } from 'react-router'

import AppLayoutCartOverview from './AppLayoutCartOverview'
import AppLayoutHeader from './AppLayoutHeader'
import Spinner from './Spinner'

export default function AppLayout() {
  const navigation = useNavigation()
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <AppLayoutHeader />

      {navigation.state === 'loading' && <Spinner />}

      <main className="overflow-y-auto">
        <Outlet />
      </main>
      <AppLayoutCartOverview />
    </div>
  )
}
