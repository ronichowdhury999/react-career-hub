import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div>
      <h1>Error pages</h1>
        <button>
        <Link to={'/'}>Go back</Link>
        </button>
    </div>
  )
}

export default ErrorPage