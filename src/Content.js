import React from 'react';
import './Content.css';
import anime from 'animejs/lib/anime.es.js';

export default class Content extends React.Component {
    render() {
        return(
            <div className="window window-{this.props.page}"></div>
        );
    }
}