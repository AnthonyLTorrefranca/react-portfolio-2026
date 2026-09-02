import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="flex justify-around items-center h-14 bg-black">
    <div className="flex justify-around items-center gap-3">
      <h1 className="text-white">ANTHONY</h1>
      <span className="h-8 w-1 bg-white" ></span>
      <h1 className="text-white">TORREFRANCA</h1>
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