export default function SkillsBox({icon, title, description}){
  return(
    <section className="flex flex-col min-w-screen overflow-hidden
        items-center justify-center bg-zinc-900 border-2
        transition-all duration-300 border-stone-600 
        h-40 w-40 md:h-50 md:w-60 hover:border-stone-400 hover:scale-110
        cursor-pointer hover:border-yellow-300 p-4">
        <p className="text-3xl text-white">{icon}</p>
        <p className="text-md font-bold md:text-3xl text-white">{title}</p>
        <p className="text-white md:text-lg">{description}</p>
    </section>  
  )
}