import React from "react";
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {BiLogoFacebookCircle} from "react-icons/bi"
import '../ComponentCSS/Sidebar.css'

const Sidebar = () => {

    const redirectToGitHub = () => {
        window.open("https://github.com/suggulokesh27","_blank");
    }
    const redirectToLinkedIn = () => {
        window.open("https://www.linkedin.com/in/suggulokesh27/","_blank")
    }

    return(
        <div className="sidebar">
            <BsLinkedin onClick={redirectToLinkedIn} />
            <BsGithub onClick={redirectToGitHub}/>
            <BiLogoFacebookCircle />
        </div>
    )
}



export default Sidebar;