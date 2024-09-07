import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div className="text-center mt-10">
      <h1>Error pages</h1>
        <button className="py-1 px-2 rounded-md border text-purple-600 border-purple-600 ">
        <Link to={'/'}>Go back</Link>
        </button>
    </div>
  )
}

export default ErrorPage