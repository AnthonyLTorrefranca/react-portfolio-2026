import SkillsData from '../assets/skillsData.json'
import SkillsDataBox from '../components/ChildComp/SkillsBox'

export default function Skills() {
  const Categories = [...new Set(SkillsData.map(item=> item.category))]
  function Test(){
    console.log(Categories)
  }
 return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-gray-300">
      <div className="flex flex-col justify-center items-center h-10 w-30 sm: md: lg: gap-6">
        {Categories.map((category, index) => 
          <h3 key={index} className='hover:cursor-pointer transition-all duration-300 rounded-xl'>{category}</h3>
          {SkillsData.map((category => (
            <SkillsDataBox key={index} />
          )))}
        )}
      </div>
    </div>
  );
}