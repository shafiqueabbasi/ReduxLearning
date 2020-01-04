import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  constructor(props){
    super(props);
    // this.state={
    //     count : 0,
    // };
}


    Increment = () => {
        // this.props.dispatch({type: "INCREMENT"});
        // this.setState({ count: this.state.count + 1});
        
    };

    Decrement = () => {
        // this.props.dispatch({type: "DECREMENT"})
        // this.setState({count: this.state.count - 1});
    };

    Reset = () => {
        // this.props.dispatch({type: "RESET"})
        // this.setState({count:  0});
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

export default connect(mapStateToProps)(Counter);