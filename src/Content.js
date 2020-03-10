import React from 'react';
import './Content.css';
import anime from 'animejs/lib/anime.es.js';

export default class Content extends React.Component {
    render() {
        if (this.props.page === 0) {
            return(
                <div className="window window-0">
                    <h1>hi, im justin.</h1>
                    <p>I am a student at UC Berkeley.
                        I work on creative functional user experiences.</p>
                    <button className="b-1" onClick={this.props.portfolio}>
                            view work
                    </button>
                </div>
            );
        }
        else if (this.props.page === 1) {
            return(
                <div className="window window-1"> WORK IN PROGRESS</div>
            );
        }
        else if (this.props.page === 2) {
            return(
                <div className="window window-2">WORK IN PROGRESS</div>
            );
        }
    }
}