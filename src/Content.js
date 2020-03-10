import React from 'react';
import './Content.css';
import anime from 'animejs/lib/anime.es.js';

export default class Content extends React.Component {
    render() {
        if (this.props.page === 0) {
            return(
                <div className="window window-0">
                    <h1>I am Justin Li.</h1>
                    <p>I focus on creative functional user experiences.</p>
                    <button className="b-1">
                            view work
                    </button>
                </div>
            );
        }
        else if (this.props.page === 1) {
            return(
                <div className="window window-1"></div>
            );
        }
        else if (this.props.page === 2) {
            return(
                <div className="window window-2"></div>
            );
        }
    }
}