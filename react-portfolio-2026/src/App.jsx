import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar';
import Router from './components/Router';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Router />
    </BrowserRouter>
  )
}