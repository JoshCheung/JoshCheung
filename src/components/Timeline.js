import React from "react";
import './css/Section.css'
import NewCard from './NewCard'
import cisco from './media/CiscoLogo.png'
import cisco2 from './media/cisco2.jpg'
import resnet from './media/ResNet.png'
import birst from './media/BirstLogo.png'
import porter from './media/porterswiggle.jpg'

export default function Timeline({ title, id}) {
    return (
        <div>
            <div>
                <center>
                    <div className="section">
                        <center>
                            <div className="line"></div>
                        </center>

                        <div className = "container-title">
                            <h2 className="color" >{title}</h2>
                        </div>


                        <div className="section-content" id={id}>

                            <NewCard
                                title="Development and Operations"
                                date="October 2019 — Present"
                                image={birst}
                                subtitle="Birst: Software Engineering"
                                text="I am currently working as a DevOps Engineer."
                            />

                            <NewCard
                                title="Software Engineer"
                                date="July 2019 — September 2019"
                                image={cisco}
                                subtitle="Cisco Systems"
                                text="Six months after I finished my internship, I returned to Cisco where I wrote test scripts that assessed 
                                the different features of Webex and tested the various versions of the application with the automation team. 
                                While working on a refactoring project, I was able to learn about the system architecture behind the scenes. 
                                I sat in on intricate conversations and implemented high-level API calls for different test cases for Webex application."
                            />
                            <NewCard
                                title="BS Degree in Computer Science"
                                date="September 2015 — April 2019"
                                image={porter}
                                subtitle="UC Santa Cruz"
                                text="During my four years at UC Santa Cruz, I encountered challenging and encouraging professors
                                who have expanded my knowledge academically and creatively. I was exposed to a variety of programming 
                                languages and working environments, which helped me gain a greater understanding of the developmental process of 
                                applications. Computer science truly commands my respect in its versatility and advancements."
                            />
                            <NewCard
                                title="Software Engineering Intern"
                                date="October 2018 — December 2018"
                                image={cisco2}
                                subtitle="Cisco Systems"
                                text="As an intern at Cisco Systems, I worked closely with some brilliant engineers.
                                For the three months there, I was given many different projects such as creating playbooks on
                                Ansible, unit testing different call functions on Webex, and creating dashboards on Grafana with MySql commands. 
                                There, I gained confidence in my abilities to write code, to have high level discussions in meetings, and just overall
                                as a software engineer."
                            />

                            <NewCard
                                title="Information Technician"
                                date="September 2017 - March 2019"
                                image={resnet}
                                subtitle="ResNet"
                                text="Resnet, a student-employed campus service, required effective communication with both students and faculty to resolve
                                technical issues. I became well-versed in these skills, over the phone, online, and in person. Specifically, I configured 
                                routers to be in compliance with campus networks, took apart computers to fix them, and removed malware/viruses to proect 
                                clients' data."
                            />
                        </div>
                    </div>
                </center>
            </div>
        </div>

    );
}
