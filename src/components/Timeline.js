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
                                subtitle="B.S Degree in Computer Science"
                                text="In my four years at UC Santa Cruz, I’ve encountered challenging and encouraging professors
                                who expanded my knowledge academically, creatively, and mentally. I have been exposed to a variety
                                of languages, group projects, and environments, and have gained a greater understanding for the
                                different aspects of computer science. The people I’ve surrounded myself with along the way adds
                                to the experience as I’ve been met with inspiring peers who are driven, kind-hearted, and humble.
                                Many of them have motivated me to learn more every day, to put myself out of my comfort zone,
                                and sometimes just relax. UC Santa Cruz has given me treasurable friendships, shown me my passion
                                for computer science, and allowed me to do what I love -learn."
                            />
                            <Card
                                title="Septemeber 2017 to March 2019"
                                image={resnet}
                                subtitle="Information Technician"
                                text="ResNet gave me a friendly working environment and the opportunity to grow as I got to
                                interact with students and faculty members and learn to effectively communicate in person, online,
                                or over the phone. Working here, I got to configure routers to be compatible with the campus network,
                                fix computers, and sometimes take them apart. I diagnosed and removed malware and viruses from computers
                                to keep the client’s data and the campus network safe. Working at ResNet allowed me to sharpen
                                my problem solving skills, communication skills, and build great friendships along the way."
                            />
                            <Card
                                title="October 2018"
                                image={cisco2}
                                subtitle="Software Engineering Intern"
                                text="Working as an intern at Cisco Systems, I got to work closely with brilliant and fun engineers.
                                For the three months working there, I was given many different projects such as creating playbooks on
                                Ansible, unit testing different call functions on Webex, and working with mySQL databases. Here, I
                                gained confidence in my abilities to write code, have high level discussions in meetings, and overall
                                as a software engineer. I hope to continue to grow with more experience and to meet great engineers
                                throughout my career."
                            />
                        </div>
                    </div>
                </center>
            </div>
        </div>

    );
}
