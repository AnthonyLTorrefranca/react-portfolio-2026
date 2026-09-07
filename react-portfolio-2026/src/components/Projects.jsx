import ProjectCard from "./ProjectCard"
import kanbanFlow from '../assets/HeaderPf.png'

export default function Projects(){
    const projects = [
        {
            id:"1",
            title:"Kanban Flow",
            description:"A mobile-first Kanban board",
            image: kanbanFlow,
            liveUrl:"",
            githubUrl:""
        },
    ]
  return(
    <>
      <section className="h-screen bg-black">
        <ProjectCard title={projects[0].title}
                    description={projects[0].description}
                    image={projects[0].image} 
                    liveUrl={projects[0].liveUrl} 
                    githubUrl={projects[0].githubUrl} />
      </section>
    </>
  )
}