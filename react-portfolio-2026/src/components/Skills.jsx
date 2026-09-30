import SkillsData from '../assets/skillsData.json'
import SkillsDataBox from '../components/ChildComp/SkillsBox'

export default function Skills() {
  const Categories = [...new Set(SkillsData.map(item=> item.category))]
  function Test(){
    console.log(Categories)
  }
 return (
   <div className='h-screen bg-gray-700'>
   {Categories.map((category, index) =>
      <div key={index} className='h-5 bg-green-300'>
        <div className="h-5 border-2 border-black rounded-xl">
          <h3 className='flex items-center justify-center text-black'>{category}</h3>
          {/* {SkillsData.filter(item=> item.category=== category)
              .map((item,index) =>
                <SkillsDataBox key={index} 
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  />
              )} */}
        </div>
      </div>
      )}
   </div>
  );
}