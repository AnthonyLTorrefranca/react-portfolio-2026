export default function ProjectCard({ title, description, image, liveUrl, githubUrl }) {
  return (
    <div className="bg-gray-100 w-full max-w-sm rounded-lg overflow-hidden shadow-md flex flex-col p-4">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
      
      <div className="flex flex-col flex-1 mt-3">
        <h3 className="font-bold text-lg text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm mt-1 flex-1">{description}</p>
        
        <div className="flex gap-2 mt-4 pt-2">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 h-10 border-2 border-black flex items-center justify-center font-medium hover:bg-black hover:text-white transition-colors rounded"
            >
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 h-10 border-2 border-black flex items-center justify-center font-medium hover:bg-black hover:text-white transition-colors rounded"
            >
              GitHub Repository
            </a>
          )}
        </div>
      </div>
    </div>
  );
}