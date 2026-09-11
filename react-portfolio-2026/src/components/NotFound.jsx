import { Link } from 'react-router-dom'
import { Button } from './ui/button'

export default function NotFound(){
    return(
    <div className="flex items-center justify-center flex-col w-screen h-screen bg-red-950">
      <p className="text-9xl font-bold">404 - PAGE NOT FOUND!</p>
      <Link to="/">
        <Button variant="outline" 
              className="text-black p-4 border-2
                         border-white rounded-2xl
                         bg-white active:bg-gray-500
                         hover:cursor-pointer
                         hover:bg-gray-200"
        >Go back home</Button>
      </Link>
    </div>
    )
}