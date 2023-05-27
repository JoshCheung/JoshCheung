import React from 'react';
import '../css/company-card.css'
import CompanyCard from './CompanyCard';
import babylist from '../media/timeline-images/babylist-logo.png'
import birst from '../media/timeline-images/birst-logo.png'
import cisco from '../media/timeline-images/cisco-logo.png'
import grad_pic from '../media/timeline-images/grad-pic.jpeg'
import cisco_internship from '../media/timeline-images/cisco-internship.jpg'
import resnet from '../media/timeline-images/resnet-logo.png'
import '../css/main.css';
import '../css/company-card.css';

const Timeline = () => {
    const timeLine = [
        { 
            title: 'Babylist',
            subtitle: 'September 2021 — January 2023',
            position: 'Software Engineer',
            summary: `Babylist provided me with an opportunity for personal and professional growth in the software engineering role. As a member of the backend team, I was able to work on diverse projects including the development of internal tools to revamping the order routing system. I collabtorated with highly skilled engineers and gained even more insight into the software building process and enjoyed the independence to work on projects autonomously.\nAlthough, my journey with Babylist was cut short due to layoffs, it was truly a great experience to aquire the skills and knowledge which have contributed to my overall growth as a software engineer.`,
            image: babylist
        },
        { 
            title: 'Birst',
            subtitle: 'October 2019 — August 2021',
            position: 'Development and Operations',
            summary: 'I was hired as a Software engineer, but at the peak of the pandemic, I was given the opportunity to work as a DevOps engineer and learn about infrastructure. This role gave me the tools and knowledge to apply to my own personal projects such as Qvinyl, while also teaching me the inner workings of enterprise level pipelines of continuous integration. DevOps was an extremely demanding position as it seemed like there was always a sensitive timeline for new products to be shipped and new technologies to be learned. Although I learned a lot from DevOps and after a deep self reflection, I wanted to continue to learn about software development rather than infrastructure development.',
            image: birst
        },
        { 
            title: 'Cisco',
            subtitle: 'July 2019 — October 2019',
            position: 'Software Engineer',
            summary: 'Six months after I finished my internship, I returned to Cisco where I wrote test scripts that assessed the different features of Webex and tested the various versions of the application with the automation team. While working on a refactoring project, I was able to learn about the system architecture behind the scenes. I sat in on intricate conversations and implemented high-level API calls for different test cases for Webex application.',
            image: cisco
        },
        { 
            title: 'University of California, Santa Cruz',
            subtitle: 'September 2015 — April 2019',
            position: 'BS Degree in Computer Science',
            summary: 'During my four years at UC Santa Cruz, I encountered challenging and encouraging professors who have expanded my knowledge academically and creatively. I was exposed to a variety of programming languages and working environments, which helped me gain a greater understanding of the developmental process of applications. Computer science truly commands my respect in its versatility and advancements.',
            image: grad_pic
        },
        { 
            title: 'Cisco',
            subtitle: 'October 2018 — December 2018',
            position: 'Software Engineering Intern',
            summary: 'Working as an intern at Cisco Systems, I got to work closely with brilliant and fun engineers. For the three months working there, I was given many different projects such as creating playbooks on Ansible, unit testing different call functions on Webex, and working with MySQL databases. Here, I gained confidence in my abilities to write code, have high-level discussions in meetings, and overall as a software engineer. I hope to continue to grow with more experience and to meet great engineers throughout my career.',
            image: cisco_internship
        },
        { 
            title: 'ResNet',
            subtitle: 'September 2017 - March 2019',
            position: 'Information Technician',
            summary: 'Resnet, a student-employed campus service, required effective communication with both students and faculty to resolve technical issues. I became well-versed in these skills, over the phone, online, and in person. Specifically, I configured routers to be in compliance with campus networks, took apart computers to fix them, and removed malware/viruses to protect clients\' data.',
            image: resnet
        },
    ]
    return (
        <div id="timeline-component" className="card-container">
            <h1 className="title">Timeline</h1>
            <hr className="horizonal-line"/>
            {timeLine.map((experience)  =>  
                <CompanyCard
                    title= {experience.title}
                    subheader={experience.subtitle}
                    position={experience.position}
                    summary={experience.summary}
                    image={experience.image}
                />
            )
        }      
        </div>
    )
}
export default Timeline;