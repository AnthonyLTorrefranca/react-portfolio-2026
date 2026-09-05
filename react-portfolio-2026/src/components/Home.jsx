import heroSection from '../assets/heroSection.png'

export default function Home(){
  return(
  <div className="m-0">
    <div className="relative">
      <img src={heroSection} className="w-full h-auto object-cover"/>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
        <p className="text-3xl text-white mb-4">INVEST IN MY CODE</p>
        <p className="text-5xl text-amber-300">ANTHONY TORREFRANCA,</p>
        <p className="text-5xl text-white mb-8">REACT JS DEVELOPER</p>
        <p className="text-white max-w-2xl mb-10">I transform requirements into seamless, performant web applications. With a passion for clean code and user-centric design, I build responsive, scalable frontend solutions that aren't just for the season, they're build to evolve. Discover my approach to engineering applications that help your digital presence feel more robust, move faster, and drive more value every single day.</p>
        <button className="bg-yellow-400 p-4 hover:cursor-pointer active:bg-yellow-500"><span className="text-white">VIEW MY PROJECTS!</span></button>
      </div>
    </div>
  </div>
  )
}