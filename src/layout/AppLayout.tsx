import { Outlet } from 'react-router'

import AppLayoutHeader from './AppLayoutHeader'
import AppLayoutCartOverview from './AppLayoutCartOverview'

export default function AppLayout() {
  return (
    <div>
      <AppLayoutHeader />
      <main>
        <Outlet />
      </main>
      <AppLayoutCartOverview />
    </div>
  )
}
