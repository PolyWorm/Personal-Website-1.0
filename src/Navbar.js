import React from 'react';
import './Navbar.css';
import anime from 'animejs/lib/anime.es.js';

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="nav-bar">
                <div className = "links">
                    <ul className = "links">
                        <li className="link">
                            about
                        </li>
                        <li className="link">
                            portfolio
                        </li>
                        <li className="link">
                            resume
                        </li>
                    </ul>
                </div>
                <div className="logo">
                </div>
            </div>
        );
    }
}