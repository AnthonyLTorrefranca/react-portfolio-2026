import ProjectCard from "./ProjectCard";
import ReactPortfolio from '../assets/ReactPortfolio.png'

export default function Projects() {
  const projects = [
    {
      id: "1",
      title: "react-portfolio",
      description:
        "Personal portfolio for presenting my projects and skills using React. It also includes a responsive navigation bar, project cards, and a contact form.",
      image: ReactPortfolio,
      liveUrl: "",
      githubUrl: "https://github.com/AnthonyLTorrefranca/react-portfolio",
    },
    {
      id: "2",
      title: "word-guess-with-hints",
      description:
        "A Python-based word-guessing game featuring a custom hint system, input validation, and dynamic life management.",
      image: kanbanFlow,
      liveUrl: "",
      githubUrl: "https://github.com/AnthonyLTorrefranca/word-guess-with-hints",
    },
    {
      id: "3",
      title: "word-guess-with-hints",
      description:
        "A Python-based word-guessing game featuring a custom hint system, input validation, and dynamic life management.",
      image: kanbanFlow,
      liveUrl: "",
      githubUrl: "https://github.com/AnthonyLTorrefranca/word-guess-with-hints",
    },
    {
      id: "4",
      title: "word-guess-with-hints",
      description:
        "A Python-based word-guessing game featuring a custom hint system, input validation, and dynamic life management.",
      image: kanbanFlow,
      liveUrl: "",
      githubUrl: "https://github.com/AnthonyLTorrefranca/word-guess-with-hints",
    },
    {
      id: "5",
      title: "word-guess-with-hints",
      description:
        "A Python-based word-guessing game featuring a custom hint system, input validation, and dynamic life management.",
      image: kanbanFlow,
      liveUrl: "",
      githubUrl: "https://github.com/AnthonyLTorrefranca/word-guess-with-hints",
    },
    {
      id: "6",
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