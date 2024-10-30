import React from "react";
import "./About.css"
import { Link } from "react-router-dom";


const About = () => {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <div className="about">
            <div className="about-heading">
                <h1>ABOUT ME</h1>
                <p>
                    Here you will find more information about me,
                    what I do,
                    and my current skills mostly in terms of programming and technology
                </p>
            </div>
            <div className="about-about">
                <div className="about-about-matter">
                    <h3>Get to know me!</h3>
                    <div>
                        <p>I'm a fresh, aspiring Frontend Web Developer eager to learn and
                            contribute to the creation of engaging Websites and Web Applications,
                            with a strong commitment to enhancing the overall product.
                            Explore some of my recent projects in the Projects section.</p>
                        <p>
                            I'm open to Job opportunities where I can contribute,
                            learn and grow.
                            If you have a good opportunity that matches my skills then don't hesitate to contact me.
                        </p>
                        <Link to="project" onClick={() => scrollToSection("project")}>Project</Link>
                    </div>
                </div>
                <div className="about-skill">
                    <h1>MY SKILLS</h1>
                    <div className="about-skill-matter">
                        <h5>REACT</h5>
                        <h5>JAVASCRIPT</h5>
                        <h5>CSS</h5>
                        <h5>HTML</h5>
                        <h5>JAVA</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default About;