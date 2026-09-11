import { Link } from 'react-router-dom'
import heroSection from '../assets/heroSection.png'
import { Button } from '@base-ui/react'
import ThemeToggle from './ChildComp/ThemeToggle'

export default function Home(){
 return(
  <div className="relative min-h-screen w-full overflow-hidden" >
    <div className="relative">
      <div className="scale-[9] translate-y- origin-left mr-auto lg:translate-y-0 lg:scale-100 lg:origin-center">
        <img src={heroSection} className="mr-0 min-w-full h-auto object-cover origin-top"/>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-start mt-[20%] text-center px-8">
        <p className="text-3xl text-white mb-4">INVEST IN MY CODE</p>
        <p className="text-5xl text-amber-300">ANTHONY TORREFRANCA,</p>
        <p className="text-5xl text-white mb-8">REACT JS DEVELOPER</p>
        <p className="text-white max-w-2xl mb-10">I transform requirements into seamless, performant web applications. With a passion for clean code and user-centric design, I build responsive, scalable frontend solutions that aren't just for the season, they're build to evolve. Discover my approach to engineering applications that help your digital presence feel more robust, move faster, and drive more value every single day.</p>
        <Link className="bg-yellow-400 p-4 hover:cursor-pointer active:bg-yellow-500 transition-all duration-300 hover:scale-105" to="/projects">
          <Button className="text-white">VIEW MY PROJECTS!</Button>
        </Link>
      </div>
    </div>
    <div className='absolute top-0 right-0 text-black flex justify-end cursor-pointer h-20 w-20 bg-green-300'>
      <ThemeToggle />
    </div>
  </div>
  )
}