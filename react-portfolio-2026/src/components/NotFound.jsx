import { Link } from 'react-router-dom'

export default function NotFound(){
    return(
    <div className="flex items-center justify-center flex-col w-screen h-screen bg-red-950">
      <p className="text-9xl font-bold">404 - PAGE NOT FOUND!</p>
      <Link to="/"><button className="text-white p-4 border-2 border-white rounded-2xl active:bg-white my-10">Go back home</button></Link>
    </div>
    )
}