import React from 'react';
import Navbar from "./Navbar";
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="body">
        <Navbar />
      </div>
    );
  }
}
