import SkillsBox from "./ChildComp/SkillsBox";

export default function Skills(){
  const SKILLS = [
    {
        icon: "🐍",
        title: "Python",
        description: "Core logic, scripting, & backend data handling"
    },
    {
        icon: "⚡",
        title: "JavaScript",
        description: "ES6+ syntax, DOM manipulation, & async workflows"
    },
    {
        icon: "⚛️",
        title: "React.js",
        description: "Component architecture, state management, & UI builds"
    },
    {
        icon: "🎨",
        title: "Tailwind CSS",
        description: "Utility-first responsive layouts & custom component styling"
    },
    {
        icon: "🌐",
        title: "HTML5 / CSS3",
        description: "Semantic web structure & modern layout design"
    },
    {
        icon: "🍃",
        title: "MongoDB",
        description: "NoSQL database design & CRUD operations"
    },
    {
        icon: "🐙",
        title: "Git / GitHub",
        description: "Version control, branching workflows, & repo management"
    },
    {
        icon: "📐",
        title: "Figma to Code",
        description: "Translating UI/UX mockups into pixel-perfect React components"
    },
    {
        icon: "📸",
        title: "Adobe Photoshop",
        description: "Asset editing, web graphic production, & visual design"
    }
];

return(
    <div className="grid grid-cols-2 grid-rows-3 pl-10 py-10 md:grid-cols-5 md:grid-rows-5 gap-14 background min-w-screen min-h-screen bg-black overflow-hidden">
        {SKILLS.map((skill, index) => (
            <SkillsBox className="text-white"
                key={index}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
            />
        ))}
    </div>
    )
}