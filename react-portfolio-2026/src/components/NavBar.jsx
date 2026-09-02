import { Link } from 'react-router-dom'
import sg from '../assets/SG.png'

export default function NavBar() {
  return (
    <nav className="flex justify-around items-center h-14 bg-black">
    <div>
      <a href="https://www.facebook.com/starkgraphics" target="_blank">
      <img src={sg} className="h-15 top-0 cursor-pointer" />
      </a>
    </div>
    <div>
      <Link to="/" className="text-white p-4 hover:underline hover:bg-gray-500">HOME</Link>
      <Link to="/bio" className="text-white p-4 hover:underline hover:bg-gray-500">BIO</Link>
      <Link to="/projects" className="text-white p-4 hover:underline hover:bg-gray-500">PROJECTS</Link>
      <Link to="/skills" className="text-white p-4 hover:underline hover:bg-gray-500">SKILLS</Link>
      <Link to="/contact" className="text-white p-4 hover:underline hover:bg-gray-500">CONTACTS</Link>
    </div>
    </nav>
  )
}