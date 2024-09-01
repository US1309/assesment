import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Task lists</h1>
            <br />
            <ul>
                <li>
                   
                    <Link to="/accordian">Task 1- Accordian</Link>
                </li>
                <li>
                    <Link to="/slider">Task 2 - Slider</Link>
                </li>
                <li>
                    <Link to="/scramble">Task 3 - Scramble Words</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;