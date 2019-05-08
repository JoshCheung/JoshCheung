import React from "react";
import './css/Section.css'
import Card from './Card'
import rotary from './media/rotary.svg'
import bean from './media/88beans.png'
import beans from './media/beans.png'
import qvinyl from './media/qvinyl.png'
import budget from './media/budgettracker.PNG'
export default function ProjectSection({ title, subtitle, dark, id, image}) {
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
                                title="Qvinyl"
                                image={qvinyl}
                                subtitle="(Full-stack) Firebase, React, JavaScript, HTML, CSS"
                                text="Qvinyl is a web application that let users queue up YouTube video/music
                                to be played synchronously across multiple devices. I played a strong role in
                                this project as scrum master organizing code sessions/meetings to ensure project
                                goals were met. I also designed a robust backend infrastructure on Firebase to
                                efficiently store user information, text messages, room data, and YouTube videos
                                in the queue. Qvinyl challenged me in several aspects of software engineering
                                such as learning new frameworks quickly, communicating effectively, and management skills. "
                                demolink="https://qvinyl.github.io/Qvinyl/"
                                demo="Demo"
                                githublink="https://github.com/Qvinyl/Qvinyl"
                                github="Github"
                            />
                            <Card
                                title="88 Beans"
                                image={beans}
                                subtitle="(Full-stack) Android, Java, SQLite"
                                text="88 Beans is an android application that tracks coffee bean usage and helps with
                                anticipating/deciding future orders. This is an application to help a client with
                                cataloguing and managing their coffee shop by visualizing coffee trends and analyzing coffee
                                bean usage for different types of beans. I implemented a database table in SQLite for
                                data to be easily extracted, analyzed, and visualized. I constructed an easy user
                                Interface to help with data readability and entering coffee information."
                                githublink="https://github.com/JoshCheung/88Beans"
                                github="Github"
                            />
                            <Card
                                title="BudgetTracker"
                                image={budget}
                                subtitle="(Front-end) Web2py, JavaScript, Chart.js, HTML, CSS"
                                text="Given a CSV file downloaded from Wells Fargo transaction history, this application
                                visualizes and categorizes each transaction for analyzation and visualization. Working
                                with a team of 4 and using Chart.js, I was able to achieve my goals. I created JavaScript
                                functions that inspected each row of a CSV file and categorized them accordingly (by
                                searched name or by ranged dates). I also crafted an intuitive UI with interactive
                                graphs to visualize large sets of organized data."
                                githublink="https://github.com/jstnzl/cs183_budget"
                                github="Github"
                            />

                            <Card
                                title="Sunrise Rotary Club"
                                image={rotary}
                                subtitle="(Front-end) JavaScript, HTML, CSS"
                                text="This was a project to completely revamp Santa Cruz Sunrise Rotary’s website. Our
                                group got to work closely with our client to restructure their website, modernizing its
                                appearance and usability. Within this project, I worked closely with HTML, CSS, and
                                JavaScript, in order to tailor accordingly to the client’s preferences."
                                demolink="https://sunriserotary.github.io/index.html"
                                demo="Demo"
                                githublink="https://github.com/sunriserotary/sunriserotary.github.io"
                                github="Github"
                            />
                        </div>
                    </div>
                </center>
            </div>
        </div>

    );
}
