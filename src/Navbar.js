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
                    <svg fill="none" id="logoAnimation" xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 130 130">
                        <path className="logo-path" d="M58.82,125V78.78a12.6,12.6,0,0,0-12.6-12.6H0V80.88H38.24a5.88,5.88,0,0,1,5.88,5.88V125Z" stroke="white" stroke-width="1"/>
                        <path className="logo-path" d="M36.76,125V110.29H20.59a5.88,5.88,0,0,1-5.88-5.88V88.24H0V112.4A12.6,12.6,0,0,0,12.6,125Z" stroke="white" stroke-width="1"/>
                        <rect className="logo-path" x="22.06" y="88.24" width="14.71" height="14.71" rx="3.83" ry="3.83" stroke="white" stroke-width="1"/>
                        <path className="logo-path" d="M112.4,125H99.26V110.29h5.15a5.88,5.88,0,0,0,5.88-5.88V99.26H125V112.4A12.6,12.6,0,0,1,112.4,125Z"  stroke="white" stroke-width="1"/>
                        <path className="logo-path" d="M91.91,125V110.29h-11V86.76a5.88,5.88,0,0,1,5.88-5.88h17.65a5.88,5.88,0,0,1,5.88,5.88v5.15H125V78.78a12.6,12.6,0,0,0-12.6-12.6H78.78a12.6,12.6,0,0,0-12.6,12.6V125Z"  stroke="white" stroke-width="1"/>
                        <rect className="logo-path" x="88.24" y="88.24" width="14.71" height="14.71" rx="3.83" ry="3.83" stroke="white" stroke-width="1"/>
                        <path className="logo-path" d="M66.18,0V46.22a12.6,12.6,0,0,0,12.6,12.6H125V44.12H86.76a5.88,5.88,0,0,1-5.88-5.88V0Z"  stroke="white" stroke-width="1"/>
                        <path className="logo-path" d="M88.24,0V14.71h16.18a5.88,5.88,0,0,1,5.88,5.88V36.76H125V12.6A12.6,12.6,0,0,0,112.4,0Z" stroke="white" stroke-width="1"/>
                        <rect className="logo-path" x="88.24" y="22.06" width="14.71" height="14.71" rx="3.83" ry="3.83"  stroke="white" stroke-width="1"/>
                        <path className="logo-path" d="M12.6,0H25.74V14.71H20.59a5.88,5.88,0,0,0-5.88,5.88v5.15H0V12.6A12.6,12.6,0,0,1,12.6,0Z"  stroke="white" stroke-width="1"/>
                        <path className="logo-path" d="M33.09,0V14.71h11V38.24a5.88,5.88,0,0,1-5.88,5.88H20.59a5.88,5.88,0,0,1-5.88-5.88V33.09H0V46.22a12.6,12.6,0,0,0,12.6,12.6H46.22a12.6,12.6,0,0,0,12.6-12.6V0Z"  stroke="white" stroke-width="1"/>
                        <rect className="logo-path" x="22.06" y="22.06" width="14.71" height="14.71" rx="3.83" ry="3.83"  stroke="white" stroke-width="1"/>
                    </svg>
                </div>
            </div>
        );
    }
}