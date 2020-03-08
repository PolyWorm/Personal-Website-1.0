import React from 'react';
import './Navbar.css';
import anime from 'animejs/lib/anime.es.js';

export default class Navbar extends React.Component() {
    render() {
        return (
            <div className="nav-bar">
                <div className="logo">
                </div>
                <div className="links">
                    <div className="link">
                        about
                    </div>
                    <div className="link">
                        portfoloio
                    </div>
                    <div className="link">
                        resume
                    </div>
                </div>
            </div>
        );
    }
}