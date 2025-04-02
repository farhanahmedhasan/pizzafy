import UserCreate from '../../components/ui/user/userCreate'

export default function Homepage() {
  return (
    <div className="my-10 text-center sm:my-16">
      <h1 className="text-xl font-semibold mb-8 px-4 md:text-3xl">
        The best pizza <br />
        <span className="text-yellow-500">Straight out of oven, straight to you.</span>
      </h1>
      <UserCreate />
    </div>
  )
}
