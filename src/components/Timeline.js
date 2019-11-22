import React from "react";
import './css/Section.css'
import Card from './Card'
import cisco from './media/CiscoLogo.png'
import cisco2 from './media/cisco2.jpg'
import resnet from './media/ResNet.png'
import birst from './media/BirstLogo.png'
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
                                title="October 2019 - Present"
                                image={birst}
                                subtitle="Birst: Software Engineering"
                                text="I am currently working my way up to become a FullStack Engineer."
                            />

                            <Card
                                title="July 2019 - September 2019"
                                image={cisco}
                                subtitle="Cisco Systems: Software Engineering"
                                text="I returned to Cisco on the Webex automation team where I wrote test scripts that assessed the
                                different features of Webex and tested the various versions of the application. While working on a
                                refactoring project, I got to see how system architecture and design meetings took place. I was able
                                to sit in on these intricate conversations and implement high-level API calls for different test cases
                                for the Webex application. "
                            />
                            <Card
                                title="September 2015 - April 2019"
                                image={porter}
                                subtitle="UC Santa Cruz: BS Degree in Computer Science"
                                text="In my four years at UC Santa Cruz, I’ve encountered challenging and encouraging professors
                                who have expanded my knowledge academically and creatively. Through in-class experiences and
                                group projects, I have been exposed to a variety of programming languages, environments, and learned about the
                                developmental process of applications and gained a greater respect for the different aspects of computer science.
                                My peers have inspired me through their own drive to learn and has taught me to open myself up to new opportunities
                                and grasp them to make something of my own."
                            />
                            <Card
                                title="October 2018 - December 2018"
                                image={cisco2}
                                subtitle="Cisco Systems: Software Engineering Intern"
                                text="Working as an intern at Cisco Systems, I got to work closely with brilliant and fun engineers.
                                For the three months working there, I was given many different projects such as creating playbooks on
                                Ansible, unit testing different call functions on Webex, and working with mySQL databases. Here, I
                                gained confidence in my abilities to write code, have high level discussions in meetings, and overall
                                as a software engineer."
                            />

                            <Card
                                title="September 2017 - March 2019"
                                image={resnet}
                                subtitle="ResNet: Information Technician"
                                text="ResNet was I place where I had to effectively communicate with students and faculty members
                                in order to resolve their technical issues. I had to hone these communications skills over the phone,
                                online, or in person to assist these students. Working at ResNet, I configured routers to be compliant
                                with the campus network, took apart computers in order to fix them, and removed malware/ viruses to
                                protect clients’ data."
                            />
                        </div>
                    </div>
                </center>
            </div>
        </div>

    );
}
