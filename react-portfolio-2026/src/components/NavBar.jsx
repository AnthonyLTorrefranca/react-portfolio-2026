import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="flex justify-around items-center h-14">
    <a href="https://www.facebook.com/6saitama9" target="_blank" className="flex justify-around items-center gap-2">
      <p className="text-white text-xl">ANTHONY</p>
      <p className="text-white text-xl">TORREFRANCA</p>
      <span className="h-8 w-1 bg-white" ></span>
      <p className="text-yellow-300 text-xl">PORTFOLIO</p>
    </a>
    <div>
      <Link to="/" 
      className="text-white p 4 
        hover:underline
        hover:text-gray-400">HOME</Link>
      <Link to="/bio" 
        className="text-white p 4 
        hover:underline
        hover:text-gray-400">BIO</Link>
      <Link to="/projects"
        className="text-white p-4 
        hover:underline
        hover:text-gray-400">PROJECTS</Link>
      <Link to="/skills" 
        className="text-white p 4 
        hover:underline
        hover:text-gray-400">SKILLS</Link>
      <Link to="/contacts" 
        className="text-white p-4 
        hover:underline
        hover:text-gray-400">CONTACTS</Link>
    </div>
    </nav>
  )
}