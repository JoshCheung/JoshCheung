import React from "react";
import './css/Section.css'
import NewCard from './NewCard'
import rotary from './media/rotary.svg'
import bean from './media/88beans.png'
import wbeans from './media/whitebeans.png'
import beans from './media/beans.png'
import qvinyl from './media/qvinyl.png'
import qvinyl2 from './media/Qvinyl2.0.png'
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
                            <NewCard
                                title="Qvinyl2.0"
                                image={qvinyl2}
                                date="April 2020 — Present"
                                subtitle="(Full-stack) Docker, Cloud Plat.(GCP), RestAPI, MySQL, React, Tomcat, Youtube API, Socket.io, Firestore, Material-UI, Reactstrap"
                                text="With the Coronavirus still on the rise and the quarantine in place, I felt the extra time on hand could be a great 
                                opportunity to revitalize an old project of mine - Qvinyl. With more experience under my belt, 
                                I built the application from the ground up and improved on existing ideas with new technologies I had learned, which
                                proved challenging. However, I was able to overcome this personal hurdle with extensive research, countless hours of 
                                Youtube tutorials, and the help of my bestfriend, StackOverFlow. Through this experience, I have gained a greater 
                                understanding of RestAPI, Docker, React, and Google Cloud Platform."
                                demolink="http://qvinyl.cc/Qvinyl"
                                demo="Demo"
                                githublink="https://github.com/Qvinyl/Qvinyl2.0"
                                github="Github"
                            />
                        
                            <NewCard
                                title="Qvinyl"
                                image={qvinyl}
                                date="June 2018 — August 2018"
                                subtitle="(Full-stack) Firebase, React, JavaScript, HTML, CSS"
                                text="Qvinyl is a web application that allows users to queue up Youtube videos / playlists to be played synchronously 
                                across mutiple devices. I played the role of scrum master, organizing code sessions and meetings to ensure project 
                                goals were met. In addition, I designed a robust backend infrastructure on Firebase to effienctly store user information, 
                                text messages, room data, and YouTube links in the queue."
                                demolink="https://qvinyl.github.io/Qvinyl/"
                    
                                githublink="https://github.com/Qvinyl/Qvinyl"
                                github="Github"
                            />
                            <NewCard
                                title="88 Beans"
                                image={wbeans}
                                date="November 2018 — January 2019"
                                subtitle="(Full-stack) Android, Java, SQLite"
                                text="88 Beans is an android application that tracks coffee bean usage in order to help anticipate
                                future orders. I implemented a database table in SQLite that takes quantative data and visually relays
                                the information with a combination of graphs and charts. The application has an easy user Interface to
                                help with data readability and data entry."
                                githublink="https://github.com/JoshCheung/88Beans"
                                github="Github"
                            />
                            <NewCard
                                title="BudgetTracker"
                                image={budget}
                                date="March 2018 — June 2018"
                                subtitle="(Front-end) Web2py, JavaScript, Chart.js, HTML, CSS"
                                text="Given a CSV file downloaded from Wells Fargo transaction history, this application
                                visualizes and categorizes each transaction for analysis and visualization. Working
                                with a team of 4 in conjuction with Chart.js, I created JavaScript
                                functions that inspected each row of a CSV file and categorized them accordingly (by
                                searched name or by ranged dates). I also crafted an intuitive UI with interactive
                                graphs to visualize large sets of organized data."
                                githublink="https://github.com/jstnzl/cs183_budget"
                                github="Github"
                            />

                            <NewCard
                                title="Sunrise Rotary Club"
                                image={rotary}
                                date="January 2018 - March 2018"
                                subtitle="(Front-end) JavaScript, HTML, CSS"
                                text="This project was an opportunity for my team to work closely with the Santa Cruz Sunrse Rotary 
                                to completely restructure their website by modernizing its appearance and usability. 
                                Within this project, I used JavaScript, HTML, and CSS to tailor the details to our client's preferences."
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
