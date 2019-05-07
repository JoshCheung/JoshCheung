import React from "react";
import './css/Section.css'
import Card from './Card'
import rotary from './media/rotary.svg'
import bean from './media/88beans.png'
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
                                text="Qvinyl is a web application that let users queue up YouTube video/music to be played synchronously on different devices. I played a strong role in this project as scrum master organizing code sessions/meetings to ensure project goals were met. I also designed a robust backend infrastructure on Firebase to efficiently store user information, text messages, room data, and YouTube videos in the queue. Qvinyl challenged me in several aspects of software engineering such as learning new frameworks quickly, communicating effectively, and management skills."
                                demolink="https://qvinyl.github.io/Qvinyl/"
                                demo="Demo"
                                githublink="https://github.com/Qvinyl/Qvinyl"
                                github="Github"
                            />
                            <Card
                                title="88 Beans"
                                image={bean}
                                subtitle="(Full-stack) Android, Java, SQLite"
                                text="88 Beans is an android application that tracks coffee bean usage and helps with anticipating/deciding future orders. This is an application to help a client with cataloguing and managing their coffee shop by visualizing coffee trends and analyzing coffee bean usage for different types of beans. I implemented a database table in SQLite for data to be easily extracted, analyzed, and visualized. I constructed an easy user Interface to help with data readability and entering coffee information. With this project, I got to experiment with different android APIs such as graphs and working closely with a client trying to cater towards their expectations."
                                githublink="https://github.com/JoshCheung/88Beans"
                                github="Github"
                            />
                            <Card
                                title="BudgetTracker"
                                image={budget}
                                subtitle="(Front-end) Web2py, JavaScript, Chart.js, HTML, CSS"
                                text="The story behind this project is that Wells Fargo does not have a way to visualize budget and spending habits, therefore as a class group project, I wanted a way for me to visualize my spending habits and analyze my transaction history. Working with a team of 4 and using Chart.js, I was able to achieve my goal. I created JavaScript functions that inspected each row of a CSV file and categorized them accordingly (by searched name or by ranged dates). I also crafted an intuitive UI with interactive graphs to visualize large sets of organized data. This project taught different aspects of JavaScript and how to use existing JavaScript API such as Charts.js."
                                githublink="https://github.com/jstnzl/cs183_budget"
                                github="Github"
                            />

                            <Card
                                title="Sunrise Rotary Club"
                                image={rotary}
                                subtitle="(Front-end) JavaScript, HTML, CSS"
                                text="This was a project to completely revamp Santa Cruz Sunrise Rotary’s website. Within this project, I got to work collaborate with the client and help them restructure their website, modernizing its appearance and usability. This project taught me the different aspects of web development using HTML and CSS to tailor aesthetics according to the client’s preferences. However, I also got to use my own creativity and integrated what I thought would best fit certain areas of the website. Overall, this project was eye opening and showed me the process of creating a website and my own capabilities."
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
