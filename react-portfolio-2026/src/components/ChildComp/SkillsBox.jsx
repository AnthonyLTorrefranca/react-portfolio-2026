export default function SkillsBox({icon, title, description}){
  return(
    <section className="flex flex-col w-[5rem] md:w-[260px] overflow-hidden
        items-left justify-center bg-[#111625] border-2 rounded-xl
        transition-all duration-300 border-stone-600 mt-8 mb-8 
        min-h-[150px] min-w-[150px] md:h-[250px] md:min-w-[250px] hover:border-300 hover:scale-110
        cursor-pointer hover:border-blue-300 p-4">
        <div className="">
          <p className="text-3xl p-2 md:p-5">{icon}</p>
          <p className="text-md font-bold md:text-3xl text-gray-200">{title}</p>
          <p className="text-gray-600 text-xs md:text-lg">{description}</p>
        </div>
    </section>  
  )
}