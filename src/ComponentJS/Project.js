import React from "react";
import "../ComponentCSS/Project.css"
import tictactoe from "../Assest/tictactoe.png"
import foodiesExpress from "../Assest/foodiesExpress.png"
import auth from "../Assest/auth.png"
import portfolio from "../Assest/portfolio.png"

const Project = () => {
    return (
        <div className="project">
            <div className="project-heading">
                <h1>PROJECTS</h1>
                <div>
                    <p>Here you will find some of the practice projects that I created, with each project containing its own case study.</p>
                </div>
            </div>
            <div className="project-container">
                <div className="project-details">
                    <img src={tictactoe} alt="tictactoe" />
                    <ul>
                        <li>
                            Play a game of Tic-Tac-Toe with a friend.
                        </li>
                        <li>
                            Keep track of the game's history.
                        </li>
                        <li>
                            Determine the winner and highlight the winning squares.
                        </li>
                        <li>
                            Toggle between different moves in the game's history.
                        </li>
                    </ul>
                </div>
                <div className="project-details">
                    <img src={foodiesExpress} alt="foodiesExpress" />
                    <ul>
                        <li>
                            Browse and select food items from the menu.
                        </li>
                        <li>
                            Add items to your shopping cart.
                        </li>
                        <li>
                            View and edit your cart contents.
                        </li>
                        <li>
                            Place orders and receive confirmation through modal dialogs.
                        </li>
                        <li>
                            Utilizes React's useContext for state management and useState for managing cart items.
                        </li>
                    </ul>
                </div>
                <div className="project-details">
                    <img src={auth} alt="authentication" />
                    <ul>
                        <li>
                            User registration and login.
                        </li>
                        <li>
                            Protected routes that require authentication.
                        </li>
                        <li>
                            Session management with JSON Web Tokens (JWT).
                        </li>
                        <li>
                            Place orders and receive confirmation through modal dialogs.
                        </li>
                        <li>
                            Integration with a Java backend for user data storage and authentication
                        </li>
                    </ul>
                </div>
                <div className="project-details">
                    <img src={portfolio} alt="portfolio" />
                    <ul>
                        <li>
                         Built using the React library for a dynamic and interactive user interface.
                        </li>
                        <li>
                        Styling with CSS to create a visually appealing and responsive design.
                        </li>
                        <li>
                         Utilized React Icons for a wide variety of customizable icons.
                        </li>
                        <li>
                        Implemented functionality and interactivity with JavaScript.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};




export default Project;