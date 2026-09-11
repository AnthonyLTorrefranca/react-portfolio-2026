import SkillsBox from './ChildComp/SkillsBox';

export default function ContactSection() {
  
    const contactDetails = [
  {
    icon: "📧",
    title: "Email",
    description: "anthony.torrefranca@gmail.com"
  },
  {
    icon: "💼",
    title: "LinkedIn",
    description: "linkedin.com/in/anthony-torrefranca-04a60b1b3/"
  },
  {
    icon: "💻",
    title: "GitHub",
    description: "github.com/AnthonyLTorrefranca/"
  },
  {
    icon: "📍",
    title: "Location",
    description: "Cebu City, Philippines"
  }
];
  return (
    <div className="flex flex-wrap items-center justify-center bg-black min-h-screen p-8 gap-4">
      {contactDetails.map((contact, index) => (
        <a key={index} href={
            contact.title === "Email" ? `mailto:${contact.description}` : contact.description.startsWith("http") || contact.description.includes(".com") ? `https://${contact.description}` : "#"
          } target="_blank" rel="noopener noreferrer">
          <SkillsBox 
            icon={contact.icon}
            title={contact.title}
            description={contact.description}
          />
        </a>
      ))}
    </div>
  );
}