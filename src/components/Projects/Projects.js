import React from 'react';
import plumberGuru from '../../images/plumber-guru.png';
import expressRider from '../../images/express-rider.png';
import footballTeams from '../../images/football-teams.png';
import ProjectDetail from '../ProjectDetail/ProjectDetail';


const projectData = [
    {
        img: plumberGuru,
        name: 'PlumberGuru',
        description: 'A full-stack plumber service web app where you can book your necessary plumbing service. You need to sign in with google and have to pay for the chosen service. A user can find all the booking from the user dashboard and an admin can manage orders from the admin panel.',
        website: 'https://plumber-guru.web.app/',
        client: 'https://github.com/sakibabir52/plumber-guru-client',
        server: ''
    },
    {
        img: expressRider,
        name: 'Express Rider',
        description: "This project was bootstrapped with React router. This project is about to share ride with bike, car, bus and train. If anyone hit any transport card, it will be open in new tab with that particular ride sharing tranport's information.",
        website: 'https://express-rider.netlify.app/',
        client: 'https://github.com/sakibabir52/express-rider',
        server: ''
    },
    {
        img: footballTeams,
        name: 'Football Teams',
        description: 'This website is about English Premier League teams and if you click Explore button, it will be open in new tab with that particular club’s information.',
        website: 'football-teams.netlify.app',
        client: 'https://github.com/sakibabir52/football-teams',
        server: ''
    }

]

const Projects = () => {
    return (
        <div className="projects-container">
            <div className="container-brand">
                <h2 className="text-center text-light">Projects</h2>
                <div className="projects pt-5">
                    {
                        projectData.map(project => <ProjectDetail project={project}></ProjectDetail>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;