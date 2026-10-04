import SkillsData from '../assets/skillsData.json'
import SkillsDataBox from '../components/ChildComp/SkillsBox'

export default function Skills() {
  const categories = [...new Set(SkillsData.map(item => item.category))]
 return (
   <div className='bg-gray-200'>
    <section className="flex flex-col items-left pt-[5rem] pl-[25rem]">
    <p className="text-4xl pb-2 font-bold">Skills</p>
    <p className="text-sm pb-10">The tools I use to design, build, and ship web apps.</p>
      {categories.map((category) =>
        <div key={category}>
          <p className="font-bold text-gray-600 my-3">{category}</p>
          <hr className="border border-gray-300 w-[80rem]"/>
          <div className="flex">
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
        </div>
      )}
    </section>
   </div>
  );
}