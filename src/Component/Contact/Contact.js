import React from "react";
import { BsLinkedin } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
import { SiLeetcode } from "react-icons/si";
import "./Contact.css"


const Contact = () => {

    const redirectToGitHub = () => {
        window.open("https://github.com/suggulokesh27", "_blank");
    }
    const redirectToLinkedIn = () => {
        window.open("https://www.linkedin.com/in/suggulokesh27/", "_blank")
    }
    const redirectToLeetCode = () => {
        window.open("https://leetcode.com/problemset/", "_blank")
    }

    return (
        <div className="container">
            <div className="container-details">
                <h4>LOKESH SUGGU</h4>
                <p>
                    As a budding Frontend Developer,
                    I'm actively seeking opportunities to apply my skills in " REACT, HTML, CSS, and JAVASCRIPT " to contribute to innovative web projects.
                    I'm excited about the prospect of joining a dynamic team and making a meaningful impact.
                </p>
            </div>
            <div className="container-social-headers">
                <h4>SOCIAL</h4>
                <div className="container-social">
                    <BsLinkedin onClick={redirectToLinkedIn} />
                    <BsGithub onClick={redirectToGitHub} />
                    <SiLeetcode onClick={redirectToLeetCode} />
                </div>
            </div>
        </div>
    )
}



export default Contact;