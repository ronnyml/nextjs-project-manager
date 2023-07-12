import { Project } from '../Models/Project';
import Image from "next/image";
import Link from "next/link";

const formatDescription = (description: string): string => {
  return description.substring(0, 100) + '...';
}

interface ProjectCardProps {
  project: Project;
  onEdit: (project: Project) => void;
}

const ProjectCard = (props: ProjectCardProps) => {
  const { project, onEdit } = props;

  const handleEditClick = (projectBeingEdited: Project) => {
    onEdit(projectBeingEdited);
  };

  return (
    <div className="card">
      <Image 
        src={project.imageUrl} 
        alt={project.name}
        width={500}
        height={300}
      />
      <section className="section dark">
        <Link href={'/projects/' + project.id}>
        <h5 className="strong">
          <strong>{project.name}</strong>
        </h5>
        </Link>
        <p>{formatDescription(project.description)}</p>
        <p>Budget : {project.budget.toLocaleString()}</p>

        <button className="bordered" onClick={() => { handleEditClick(project); }}>
          <span className="icon-edit "></span>
          Edit
        </button>
      </section>
    </div>
  );
}

export default ProjectCard;