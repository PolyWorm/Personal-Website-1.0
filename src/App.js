import React from 'react';
import Navbar from "./Navbar";
import './App.css';

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      page: 0
    }
  }
  pageSwap(i) {
    this.setState({
      page: i
    })
  }
  render() {
    return (
      <div className="body">
        <div className="buffer-bar"></div>
        <Navbar about={() => this.pageSwap(0)}
                about={() => this.pageSwap(0)}
                about={() => this.pageSwap(0)}/>
      </div>
    );
  }
}
