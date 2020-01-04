import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Increment, Decrement, Reset } from '../Components/ActionFolder/action';

class Counter extends Component {
  constructor(props){
    super(props);
    this.state={
        count : 0,
    };
}


  Increment = () => {
    this.props.Increment();
  };

  Decrement = () => {
    this.props.Decrement();
  };

  Reset = () => {
    this.props.Reset();
  };
    


  render() {

    return (
      <div>
            {/* <p>{this.state.count}</p> */}
            <p>{this.props.count}</p>
            <button onClick={this.Increment}>Increment</button>
            <button onClick={this.Decrement}>Decrement</button>
            <button onClick={this.Reset}>Reset</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
      count: state.count
    };
  }

const mapDispatchToProps = {
  Increment,
  Decrement,
  Reset
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);