import React from 'react';
import logo from './logo.svg';
import './App.css';
class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state={date:new Date()};

  }
  componentDidMount(){
    this.idTime=setInterval(
      ()=>{this.tick()},1000
    );

  }
  tick(){
    this.setState({date:new Date()})
  }
  render(){
    return(
      <div>
        <h2>
          Bây giờ là :{this.state.date.toLocaleTimeString()}
        </h2>
      </div>
    );
  }
}
export default Clock;
