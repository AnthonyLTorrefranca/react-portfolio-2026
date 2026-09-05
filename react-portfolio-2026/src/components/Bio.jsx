import HeaderProfile from '../assets/HeaderPf.png'

export default function Bio(){
  const coreValues = [
    {
      id: 1,
      title: 'Clean Code',
      icon: '</>',
      description: 'Writing readable, maintainable, and well-structured frontend code.',
    },
    {
      id: 2,
      title: 'User-Centric',
      icon: '👤',
      description: 'Focusing on intuitive user interfaces and seamless user experiences.',
    },
    {
      id: 3,
      title: 'Performant Apps',
      icon: '🚀',
      description: 'Optimizing render times, component states, and modern web builds.', 
    },
    {
      id: 4,
      title: 'Continuous Learning',
      icon: '💡',
      description: 'Constantly refining JavaScript, React, and full-stack capabilities.',
    },
  ];
  const introduction = {
    intro1: "I am a dedicated React JS Developer focused on turning complex requirements into responsive, high-performance web applications. My approach combines strong core programming logic with modern UI  frameworks to build scalable frontend solutions. I believe in writing readable, maintainable, and well-structured frontend code, optimizing render times, and constant refinement of my skillset.",
    intro2: "Replicating complex designs from Figma to production-ready React components with Tailwind CSS is my specialty. I focus on performance, clean component architecture, and continuous growth to deliver user-centric solutions. With a passion for learning and an eye for detail, I aim to create web experiences that are not just robust, but intuitive and seamless."
  }
return(
  <>
    <section className="h-screen bg-black">
      <div className="flex justify-center items-center p-15">
        <div className="px-10 hover:scale-110 transition-all duration-300 cursor-pointer">
          <img src={HeaderProfile} className="h-100 border-orange-300 border-2 rounded-full hover:border-orange-400 cursor-pointer" alt="Developer's Photo" />
        </div>
        <div className="text-white w-150">
          <p className="text-white text-5xl">ABOUT ME</p>
            <br/>
          <p className="text-2xl">ENGINEERING WITH PURPOSE</p>
            <br/>
          <p>{introduction.intro1}</p> 
            <br/>
          <p>{introduction.intro2}</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4">
        {coreValues.map(item =>{
          return(
            <section key={item.id} className="flex flex-col items-center justify-center bg-zinc-900 border-2 border-stone-600 h-50 w-60 hover:border-stone-400 hover:scale-110 transition-all duration-300 cursor-pointer">
              <p className="text-3xl text-white p-4">{item.icon}</p>
              <h3 className="text-white p-4">{item.description}</h3>
            </section>
          )})}
      </div>
    </section>
  </>
 )
}