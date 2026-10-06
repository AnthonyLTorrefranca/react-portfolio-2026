export default function SkillsBox({icon, title, description}){
  return(
    <section className="flex flex-col overflow-hidden cursor-pointer
        items-left justify-center bg-[#111625] border-2 rounded-xl
        transition-all duration-300 border-stone-600 mt-8 mb-8 
        min-h-[150px] min-w-[150px] md:h-[250px] md:min-w-[250px]
        md:w-[20rem] hover:scale-110 hover:border-blue-300 p-4
        hover:border-300 w-[13rem]">
        <div className="">
          <div className="flex items-center justify-center rounded-xl h-12 w-12 bg-gray-300/15">
            <p className="text-3xl p-2 md:p-5">{icon}</p>
          </div>
          <p className="text-md font-bold md:text-3xl text-gray-200">{title}</p>
          <p className="text-gray-600 text-xs md:text-lg">{description}</p>
        </div>
    </section>  
  )
}