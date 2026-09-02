import { Link } from 'react-router-dom'
import sg from '../assets/SG.png'

export default function NavBar() {
  return (
    <nav className="flex justify-around items-center h-14 bg-black">
    <div>
      <img src={sg} className="h-15 top-0 cursor-pointer" />
    </div>
    <div>
      <Link to="/" className="text-white p-4">HOME</Link>
      <Link to="/bio" className="text-white p-4">BIO</Link>
      <Link to="/projects" className="text-white p-4">PROJECTS</Link>
      <Link to="/skills" className="text-white p-4">SKILLS</Link>
      <Link to="/contact" className="text-white p-4">CONTACTS</Link>
    </div>
    </nav>
  )
}