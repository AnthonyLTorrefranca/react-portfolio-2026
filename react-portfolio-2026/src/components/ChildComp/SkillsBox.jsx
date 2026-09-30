export default function SkillsBox({icon, title, description}){
  return(
    <section className="flex flex-col w-[260px] overflow-hidden
        items-center justify-center bg-white border-2 rounded-xl
        transition-all duration-300 border-stone-600  m-8 
        min-h-[120px] min-w-[140px] md:h-50 md:min-w-[150px]  hover:border-stone-400 hover:scale-110
        cursor-pointer hover:border-yellow-300 p-4">
        <p className="text-3xl">{icon}</p>
        <p className="text-md font-bold md:text-3xl text-black">{title}</p>
        <p className="text-black md:text-lg">{description}</p>
    </section>  
  )
}