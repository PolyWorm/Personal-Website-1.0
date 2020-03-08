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
                        <p>about</p>
                    </div>
                    <div className="link">
                        <p>portfoloio</p>
                    </div>
                    <div className="link">
                        <p>resume</p>
                    </div>
                </div>
            </div>
        );
    }
}