import SkillsData from '../assets/skillsData.json'
import SkillsDataBox from '../components/ChildComp/SkillsBox'

export default function Skills() {
  const categories = [...new Set(SkillsData.map(item => item.category))]
 return (
   <div className='h-screen'>
    <section className="flex flex-col items-left pt-[5rem] pl-[2rem] md:pl-[10rem]">
    <p className="text-6xl pb-2 font-bold">Skills</p>
    <p className="text-m pt-5 pb-10">The tools I use to design, build, and ship web apps.</p>
      {categories.map((category) =>
      <>
        <div key={category}>
          <p className="font-bold text-xl text-gray-600 my-3">{category}</p>
          <hr className="border border-gray-300 w-[30rem] md:w-[126rem]"/>
        </div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {SkillsData
          .filter(item => item.category === category)
          .map((item, index) => 
            <SkillsDataBox
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />)
          }
        </div>
      </>
      )}
    </section>
   </div>
  );
}