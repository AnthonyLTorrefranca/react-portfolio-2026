import heroSection from '../assets/heroSection.png'

export default function Home(){
  return(
    <div className="relative -top-2">
      <div className="border-2">
        <img src={heroSection}/>
      </div>
      <div className="absolute top-5 right-1/3">
        <p className="ml-25 text-2xl text-white">INVEST IN MY CODE</p>
        <p className="mr-20 text-5xl text-white">Anthony Torrefranca</p>
      </div>
    </div>
  )
}