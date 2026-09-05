import { Link } from 'react-router-dom'

export default function NotFound(){
    return(
    <div className="w-screen h-screen bg-red-950">
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">Go back home</Link>
    </div>
    )
}