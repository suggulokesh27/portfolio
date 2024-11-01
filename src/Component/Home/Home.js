import React from "react";
import './Home.css'
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";


const Home = () => {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if(section){
            section.scrollIntoView({behavior:"smooth"});
        }
    }

    return (
        <div className="home">
            <div className="home-sidebar">
                <Sidebar />
            </div>
            <div className="home-details">
                <h1>HEY, I'M LOKESH SUGGU</h1>
                <p>
                    A Frontend focused Web Developer building the Frontend of
                     Websites and Web Applications that leads to the success of the overall product
                </p>
                <Link to="project" onClick={()=> scrollToSection("project")}>Project</Link>
            </div>
        </div>
    )
}



export default Home;