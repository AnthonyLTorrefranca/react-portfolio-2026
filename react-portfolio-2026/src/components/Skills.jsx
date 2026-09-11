import SkillsBox from "./ChildComp/SkillsBox";
import { useState } from "react";
import skills from '../assets/skillsData.json'

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <SkillsBox
            key={index}
            icon={skill.icon}
            title={skill.title}
            description={skill.description}
            onClick={() => setSelectedSkill(skill)}
          />
        ))}
      </div>

      {/* Fullscreen Overlay / Modal */}
      {selectedSkill && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedSkill(null)}
        >
          <div 
            className="bg-zinc-900 border-2 border-yellow-300 rounded-xl p-8 max-w-lg w-full flex flex-col items-center text-center relative shadow-2xl animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-stone-400 hover:text-white text-xl font-bold"
              onClick={() => setSelectedSkill(null)}
            >
              ✕
            </button>
            <div className="text-6xl mb-4">{selectedSkill.icon}</div>
            <h2 className="text-2xl font-bold text-white mb-2">{selectedSkill.title}</h2>
            <p className="text-stone-300 text-base leading-relaxed">{selectedSkill.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}