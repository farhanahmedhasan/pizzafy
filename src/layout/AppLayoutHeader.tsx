import { Link } from 'react-router'

import OrderSearch from '../pages/order-page/partials/OrderSearch'
import Username from '../components/ui/user/Username'

export default function AppLayoutHeader() {
  return (
    <header className="row-auto flex items-center justify-between bg-yellow-500 uppercase border-b border-stone-200 px-3 py-4 sm:px-6">
      <Link to="/" className="cursor-pointer">
        <img className="h-8" src="/assets/images/logo.png" />
      </Link>
      <OrderSearch />
      <Username />
    </header>
  )
}
