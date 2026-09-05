import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Bio from './Bio'
import Projects from './Projects'
import Skills from './Skills'
import Contacts from './Contacts'
import NotFound from './NotFound'

export default function Router(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bio" element={<Bio />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/notfound" element={<NotFound />} />
    </Routes>
  )
}