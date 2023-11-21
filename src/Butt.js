import React, { Component } from 'react'

export default class Butt extends Component {
    constructor(props){
        super(props);
        this.state ={count:0};
    }
    increm = () =>{
        this.setState(prevState =>(
            {
                count:prevState.count+1
            }
        ));
    }
    decrem = () =>{
        if(this.state.count>0){
            this.setState(prevState =>(
                {
                    count:prevState.count-1
                }
            ));
        }
    }
  render() {
    return (
      <div>
      <button onClick={this.increm}>+</button>
      {this.state.count}
      <button onClick={this.decrem}>-</button>
      </div>
    )
  }
}
