import { Link } from 'react-router'

export default function AppLayoutCartOverview() {
  return (
    <div className="row-auto flex items-center justify-between bg-stone-800 text-stone-200 text-sm uppercase py-4 px-3 sm:px-6 sm:text-base">
      <p className="text-stone-300 font-semibold space-x-4 sm:space-x-6">
        <span>23 pizzas</span>
        <span>$23.34</span>
      </p>

      <Link to="">Open cart &rarr;</Link>
    </div>
  )
}
