export default function ProjectCard({title, description, image, liveUrl, githubUrl}){
  return (
    <section className="bg-gray-100 w-full max-w-sm mx-auto">
        <img src={image} alt={title} />
        <p>{title}</p>
        <p>{description}</p>
        <button className="h-10 border-2 border-black">
            <a>Live Demo</a>
        </button>
        <button className="h10 border-2 border-black">
            <a>Github Repository</a>
        </button>
    </section>
  )
}