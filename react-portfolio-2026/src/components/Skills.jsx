import SkillsData from '../assets/skillsData.json'
import SkillsDataBox from '../components/ChildComp/SkillsBox'

export default function Skills() {
  const Categories = [...new Set(SkillsData.map(item=> item.category))]
  function Test(){
    console.log(Categories)
  }
 return (
   <div className='h-screen w-screen'>
    {Categories.map((category, index) => 
        <div key={index}>
          <p className="flex items-center justify-center text-2xl">{category}</p>
          <div className="flex p-8 m-8">
            {SkillsData
              .filter(item=> item.category === category)
              .map((item,index) =>
                <SkillsDataBox
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  />
              )}
          </div>
        </div>
      )}
   </div>
  );
}