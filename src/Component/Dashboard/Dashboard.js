import React from 'react';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import About from '../About/About';
import Project from '../Projects/Project';
import Contact from '../Contact/Contact';
import "./Dashboard.css"


const Dashboard = () => {
    return (
        <div className='dashboard'>
            <Navbar />
            <div className='contain'>
                <section id='home'> <Home /></section>
                <section id='about'> <About /></section>
                <section id='project'> <Project /></section>
                <section id='contact'> <Contact /></section>
            </div>
        </div>

    );
}

export default Dashboard;
