import { Outlet, useNavigation } from 'react-router'

import AppLayoutCartOverview from './AppLayoutCartOverview'
import AppLayoutHeader from './AppLayoutHeader'
import Spinner from './Spinner'

export default function AppLayout() {
  const navigation = useNavigation()
  return (
    <div>
      <AppLayoutHeader />

      {navigation.state === 'loading' && <Spinner />}

      <main>
        <Outlet />
      </main>
      <AppLayoutCartOverview />
    </div>
  )
}
