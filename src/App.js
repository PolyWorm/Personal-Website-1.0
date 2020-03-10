import React from 'react';
import Navbar from "./Navbar";
import './App.css';
import Content from './Content';

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
        <Navbar home={() => this.pageSwap(0)}
                about={() => this.pageSwap(1)}
                resume={() => this.pageSwap(2)}
                portfolio={() => this.pageSwap(3)}/>
        <div className="buffer-bar"></div>
        <Content page={this.state.page}
                portfolio={() => this.pageSwap(3)}/>
      </div>
    );
  }
}
