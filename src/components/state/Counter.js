import React from 'react'
import { Component } from 'react'
export default class Counter extends Component {
  constructor(props){
    super(props);
    this.state={
      count:0
    }
    this.increment=this.increment.bind(this);
  }
  increment(){
    this.setState({count:this.state.count+1});
  }
  render() {
  return (
    <div>
        <div> You can push the button to increase the count </div>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
    </div>
  )
}
}
