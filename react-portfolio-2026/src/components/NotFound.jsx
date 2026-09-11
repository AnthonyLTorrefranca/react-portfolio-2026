import { Link } from 'react-router-dom'
import { Button } from './ui/button'

export default function NotFound(){
    return(
    <div className="flex items-center justify-center flex-col w-screen h-screen bg-red-950">
      <p className="text-9xl font-bold">404 - PAGE NOT FOUND!</p>
      <Link to="/" className="mt-10 hover:scale-110 transition-all duration-300 ">
        <Button variant="outline" className="text-black px-6 py-4 
          border-2 border-white rounded-2xl bg-white 
          active:bg-gray-500 hover:cursor-pointer hover:bg-gray-200"> Go back home </Button>
      </Link>
    </div>
    )
}