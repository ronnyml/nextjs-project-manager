import { Project } from '../Models/Project';
import Image from "next/image";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="card large">
          <Image
            className="rounded"
            src={project.imageUrl}
            alt={project.name}
            width={500}
            height={300}
          />
          <section className="section dark">
            <h3 className="strong">
              <strong>{project.name}</strong>
            </h3>
            <p>{project.description}</p>
            <p>Budget : {project.budget}</p>

            <p>Contract Date: {project.contractDate.toLocaleDateString()}</p>
            <p>
              <mark className="active">
                {' '}
                {project.isActive ? 'active' : 'inactive'}
              </mark>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}