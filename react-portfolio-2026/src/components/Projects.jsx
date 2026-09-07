import ProjectCard from "./ProjectCard";
import kanbanFlow from "../assets/HeaderPf.png";

export default function Projects() {
  const projects = [
    {
      id: "1",
      title: "word-guess-with-hints",
      description:
        "A Python-based word-guessing game featuring a custom hint system, input validation, and dynamic life management.",
      image: kanbanFlow,
      liveUrl: "",
      githubUrl: "https://github.com/AnthonyLTorrefranca/word-guess-with-hints",
    },
  ];

  return (
    <section className="bg-black min-h-screen p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((item) => (
          <ProjectCard
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            liveUrl={item.liveUrl}
            githubUrl={item.githubUrl}
          />
        ))}
      </div>
    </section>
  );
}