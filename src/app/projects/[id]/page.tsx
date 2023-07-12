"use client";
import { useEffect, useState } from 'react';
import { projectAPI } from '../../../api/ProjectsAPI';
import ProjectDetail from '../../../Components/ProjectDetail';
import { Project } from '../../../Models/Project';

const ProjectPage = ({ params }: { params: { id: number } }) => {
    const [loading, setLoading] = useState(false);
    const [project, setProject] = useState<Project | null>(null);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      setLoading(true);
      projectAPI
        .find(params.id)
        .then((data) => {
          setProject(data);
          setLoading(false);
        })
        .catch((e) => {
          setError(e);
          setLoading(false);
        });
    }, [params.id]);
  
    return (
      <div>
        <>
          <h1>Project Detail</h1>
          {loading && (
            <div className="center-page">
              <span className="spinner primary"></span>
              <p>Loading...</p>
            </div>
          )}
  
          {error && (
            <div className="row">
              <div className="card large error">
                <section>
                  <p>
                    <span className="icon-alert inverse "></span> {error}
                  </p>
                </section>
              </div>
            </div>
          )}
  
          {project && <ProjectDetail project={project} />}
        </>
      </div>
    );
  }
  
  export default ProjectPage;