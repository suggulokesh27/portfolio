import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Lokesh from '../Assest/Lokesh.png'
import '../ComponentCSS/Navbar.css';
import hmLog from '../Assest/ham-menu.svg';
import closeLog from '../Assest/ham-menu-close.svg'


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if(section){
            section.scrollIntoView({behavior:"smooth"});
        }
        setMenuOpen(false);
    }

    return (
        <div className={`navbar${menuOpen ? ' open' : ''}`}>
           
            <div className="navLink">
                <Link to="home" onClick={() => scrollToSection("home")}>
                    <img src={Lokesh} alt="Lokesh" />
                </Link>
                <Link to="home" onClick={() => scrollToSection("home")}>Lokesh Suggu</Link>
            </div>
            <div className={`nav-links${menuOpen ? ' open' : ''}`}>
                <Link to="home" onClick={()=> scrollToSection("home")}>Home</Link>
                <Link to="about" onClick={()=> scrollToSection("about")}>About</Link>
                <Link to="project" onClick={()=> scrollToSection("project")}>Project</Link>
                <Link to="contact" onClick={()=> scrollToSection("contact")}>Contact</Link>
            </div>
            <button className="menu-button" onClick={toggleMenu}>
                {!menuOpen ? 
                    <img src={hmLog} alt='openMenu' /> :
                    <img src={closeLog} alt='closeMenu' />
                }
            </button>
        </div>
    );
};


export default Navbar;
