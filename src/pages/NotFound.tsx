import { AlertTriangle } from "lucide-react"
import { useNavigate } from "react-router-dom"


const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="relative flex justify-center items-center w-full min-h-screen py-16 bg-linear-to-r from-primary/10 via-chart-2/10 to-chart-3/10">

      <div className="px-7 text-center space-y-3">

        <AlertTriangle className="text-center  mx-auto text-red-500 h-12 w-12 animate-bounce" />
        <h1 className="text-3xl font-semibold">
          404 - Page Not Found
        </h1>
        <p className="text-xl font-medium">
          Sorry, the page you're looking for does not exist or has been moved.
        </p>
        <button className="bg-primary hover:bg-primary/87 text-white transition-colors duration-200 ease-in-out py-3 px-10 rounded-md font-medium cursor-pointer"
          onClick={() => navigate("/")}
        >
          Go Back Home
        </button>
      </div>
    </div>
  )
}

export default NotFound