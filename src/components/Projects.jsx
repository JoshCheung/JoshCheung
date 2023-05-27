import React from 'react';
import ProjectCard from './ProjectCard';
import qvinyl2 from '../media/project-images/Qvinyl2.0.png';
import beans from '../media/project-images/beans.png';
import qvinyl from '../media/project-images/Qvinyl.png';
import budgettracker from '../media/project-images/budgettracker.png';
import rotary from '../media/project-images/rotary.png';
import '../css/company-card.css';

const Projects = () => {
    const projects = [
        {
            title: 'Qvinyl',
            stack: '(Full-Stack) Ruby on Rails, React, Redux, Material-UI, Firestore, GCP, CloudSQL, Docker, Nginx, Express.js, WebSockets, RestAPI, CertBot',
            description: 'With the Coronavirus still on the rise and the quarantine in place, I felt the extra time on hand could be a great opportunity to revitalize an old project of mine - Qvinyl. With more experience under my belt, I built the application from the ground up and improved on existing ideas with new technologies I had learned, which proved challenging. However, I was able to overcome this personal hurdle with extensive research, countless hours of Youtube tutorials, and the help of my bestfriend, StackOverFlow. Through this experience, I have gained a greater understanding of RestAPI, Docker, React, and Google Cloud Platform.',
            link: 'https://qvinyl.app/login',
            image: qvinyl
        },
        {
            title: '88 Beans',
            stack: '(Full-Stack) Android, Java, SQLite',
            description: '88 Beans is an android application that tracks coffee bean usage in order to help anticipate future orders. I implemented a database table in SQLite that takes quantative data and visually relays the information with a combination of graphs and charts. The application has an easy user Interface to help with data readability and data entry.',
            link: '',
            image: beans
        },
        {
            title: 'BudgetTracker',
            stack: '(Frontend) Web2py, JavaScript, Chart.js, HTML, CSS',
            description: 'Given a CSV file downloaded from Wells Fargo transaction history, this application visualizes and categorizes each transaction for analysis and visualization. Working with a team of 4 in conjuction with Chart.js, I created JavaScript functions that inspected each row of a CSV file and categorized them accordingly (by searched name or by ranged dates). I also crafted an intuitive UI with interactive graphs to visualize large sets of organized data.',
            link: '',
            image: budgettracker
        },
        {
            title: 'Sunrise Rotary Club',
            stack: '(Frontend) JavaScript, HTML, CSS',
            description: 'This project was an opportunity for my team to work closely with the Santa Cruz Sunrise Rotary to completely restructure their website by modernizing its appearance and usability. Within this project, I used JavaScript, HTML, and CSS to tailor the details to our client\'s preferences.',
            link: 'https://sunriserotary.github.io/index.html',
            image: rotary
        }

    ]
    return (
        <div className="card-container">
            <h1 className="title">Projects</h1>
            <hr className="horizonal-line"/>
            { 
                projects.map((project) => 
                    <ProjectCard
                        title={project.title}
                        subtitle={project.subtitle}
                        stack={project.stack}
                        description={project.description}
                        link={project.link}
                        image={project.image}
                    />
                )
            }
        </div>
    )
}
export default Projects;