import React from "react";
import './css/Section.css'
import Card from './Card'
import cisco from './media/cisco.png'
import cisco2 from './media/cisco2.jpg'
import resnet from './media/ResNet.png'
import porter from './media/porterswiggle.jpg'

export default function Timeline({ title, subtitle, dark, id, image}) {
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
                            <Card
                                title="April 2019"
                                image={porter}
                                subtitle="BS Degree in Computer Science"
                                text="In my four years at UC Santa Cruz, I’ve encountered challenging and encouraging professors
                                who expanded my knowledge academically, creatively, and mentally. Through in-class experiences and
                                group projects, I have been exposed to a variety of languages, environments, and the application
                                development process that have given me a greater understanding for the different aspects of
                                computer science. My peers have inspired me through own drive to learn and make an impact doing something they love to open 
                                myself to new opportunities and grasp them to make something of my own.
                                UC Santa Cruz has given me treasurable friendships, shown me my passion for computer science, and
                                allowed me to do what I love -learn."
                            />
                            <Card
                                title="Septemeber 2017 to March 2019"
                                image={resnet}
                                subtitle="Information Technician"
                                text="ResNet was I place where I had to effectively communicate with students and faculty members
                                in order to resolve their technical issues. I had to hone these communications skills over the phone,
                                online, or in person to assist these students. Working at ResNet, I configured routers to be compliant
                                with the campus network, took apart computers in order to fix them, and removed malware/ viruses to
                                protect clients’ data."
                            />
                            <Card
                                title="October 2018"
                                image={cisco2}
                                subtitle="Software Engineering Intern"
                                text="Working as an intern at Cisco Systems, I got to work closely with brilliant and fun engineers.
                                For the three months working there, I was given many different projects such as creating playbooks on
                                Ansible, unit testing different call functions on Webex, and working with mySQL databases. Here, I
                                gained confidence in my abilities to write code, have high level discussions in meetings, and overall
                                as a software engineer."
                            />
                        </div>
                    </div>
                </center>
            </div>
        </div>

    );
}
