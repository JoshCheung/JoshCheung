import React from "react";
import './css/Section.css'
import Card from './Card'
import rotary from './media/rotary.svg'
import bean from './media/88beans.png'
import wbeans from './media/whitebeans.png'
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
                                text="Qvinyl is a web application that let users queue up YouTube videos/music
                                to be played synchronously across multiple devices. I played a strong role in
                                this project as scrum master organizing code sessions/meetings to ensure project
                                goals were met. I also designed a robust backend infrastructure on Firebase to
                                efficiently store user information, text messages, room data, and YouTube links
                                in the queue."
                                demolink="https://qvinyl.github.io/Qvinyl/"
                                demo="Demo"
                                githublink="https://github.com/Qvinyl/Qvinyl"
                                github="Github"
                                pipe="|"
                            />
                            <Card
                                title="88 Beans"
                                image={wbeans}
                                subtitle="(Full-stack) Android, Java, SQLite"
                                text="88 Beans is an android application that tracks coffee bean usage in order to help anticipate
                                furture orders. I implemented a database table in SQLite that takes quantative data and visually relays
                                the information with a combination of graphs and charts. The application has an easy user Interface to
                                help with data readability and data entry."
                                githublink="https://github.com/JoshCheung/88Beans"
                                github="Github"
                                pipe="|"
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
                                pipe="|"
                            />

                            <Card
                                title="Sunrise Rotary Club"
                                image={rotary}
                                subtitle="(Front-end) JavaScript, HTML, CSS"
                                text="This was a project to completely revamp Santa Cruz Sunrise Rotary’s website. Our
                                group got to work closely with our client to restructure their website, modernizing its
                                appearance and usability. Within this project, I worked closely with JavaScript, HTML, and CSS
                                in order to tailor accordingly to the client’s preferences."
                                demolink="https://sunriserotary.github.io/index.html"
                                demo="Demo"
                                githublink="https://github.com/sunriserotary/sunriserotary.github.io"
                                github="Github"
                                pipe="|"
                            />
                        </div>
                    </div>
                </center>
            </div>
        </div>

    );
}
