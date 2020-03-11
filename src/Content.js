import React from 'react';
import './Content.css';
import anime from 'animejs/lib/anime.es.js';

export default class Content extends React.Component {
    animateLogo(){
        anime({
            targets: '.logo-path',
            strokeDashoffset: [0, 700],
            direction: 'alternate',
            easing: 'easeInOutQuint',
            duration: 500,
            delay: function(el, i) { return i * 10 },
          });
    }

    render() {
        if (this.props.page === 0) {
            return(
                <div className="window window-0">
                    <h1><br/>Hi Im Justin Li.</h1>
                    <p>creative and functional design</p>
                    <button className="b-1" onClick={() => {this.animateLogo(); this.props.portfolio();}}>
                            view work
                    </button>
                </div>
            );
        }
        else if (this.props.page === 1) {
            return(
                <div className="window window-1"> 
                    <h1><br/>All about me.</h1>
                    <p>I'm currently studying at UC Berkeley. I have a passion for creating beautiful things, and beauty for me refers to more than just aesthetic. I aim to create applications that feel natural to use. Currently, I'm interested in user interaction within VR and AR. Feel free to contact me: poliworm@gmail.com </p>
                    <button className="b-1">
                        <a className="b-2" href="mailto:poliworm@gmail.com" target="_top">email me</a>
                    </button>
                </div>
            );
        }
        else if (this.props.page === 2) {
            return(
                <div className="window window-2"> WORK IN PROGRESS</div>
            );
        }
        else if (this.props.page === 3) {
            return(
                <div className="window window-3">WORK IN PROGRESS</div>
            );
        }
    }
}