export default function Bio(){
  const coreValues = [
    {
      title: 'Clean Code',
      icon: '</>',
      description: 'Writing readable, maintainable, and well-structured frontend code.',
    },
    {
      title: 'User-Centric',
      icon: '👤',
      description: 'Focusing on intuitive user interfaces and seamless user experiences.',
    },
    {
      title: 'Performant Apps',
      icon: '🚀',
      description: 'Optimizing render times, component states, and modern web builds.',
    },
    {
      title: 'Continuous Learning',
      icon: '💡',
      description: 'Constantly refining JavaScript, React, and full-stack capabilities.',
    },
  ];
    {/* <p>This is for bio</p> */}
return( 
    <section className="h-screen bg-black">
      <div className="flex items-center justify-center">
        {coreValues.map((item, index)=>{
          return(
          <>
            <section key={index} className="flex flex-col items-center justify-center bg-zinc-900 border-2 border-stone-800 h-50 w-60">
              <p className="text-3xl text-white p-4">{item.icon}</p>
              <h3 className="text=white">{item.description}</h3>
            </section>
          </>)})}
      </div>
    </section>
    )
}