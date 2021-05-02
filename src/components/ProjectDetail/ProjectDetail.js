import React from 'react';

const ProjectDetail = ({ project }) => {
    return (
        <div className="project-card">
            <img className="img-fluid" src={project.img} alt="" />
            <div className="p-3">
                <h4>{project.name}</h4>
                <p>{project.description}</p>
                <a href={project.website} className="button-brand text-decoration-none" target="_blank">Website</a>
                <a href={project.client} className="button-brand text-decoration-none" target="_blank">GitHub</a>
            </div>
        </div>
    );
};

export default ProjectDetail;