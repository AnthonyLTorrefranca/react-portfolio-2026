import heroSection from '../assets/heroSection.png'

export default function Home(){
  return(
    <>
    <div className="relative">
      <div className="absolute top-50 right-1/4">
        <div className="flex flex-col items-center justify-center ml-10 p-5">
          <p className="text-3xl text-white">INVEST IN MY CODE</p>
        </div>
        <div className="flex flex-col items-center justify-center py-10">
          <p className="text-5xl text-amber-300">ANTHONY TORREFRANCA,</p>
          <p className="text-5xl text-white">REACT JS DEVELOPER</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-white w-200 py-10">I transform requirements into seamless, performant web applications. With a passion for clean code and user-centric design, I build responsive, scalable frontend solutions that aren't just for the season, they're build to evolve. Discover my approach to engineering applications that help your digital presence feel more robust, move faster, and drive more value every single day.</p>
          <button className="bg-yellow-400 p-4 hover:cursor-pointer active:bg-yellow-500"><span className="text-white">VIEW MY PROJECTS!</span></button>
        </div>
      </div>
    <div className="border-2 -z-50">
      <img src={heroSection} className="w-full h-auto object-cover"/>
    </div>
    </div>
    </>
  )
}