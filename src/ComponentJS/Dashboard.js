import React from 'react';
import Navbar from './Navbar';
import '../ComponentCSS/Dashboard.css'
import Home from './Home';
import About from './About';
import Project from './Project';
import Contact from './Contact';

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
