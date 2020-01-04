import React, { Component } from 'react';

class TodoList2 extends Component {

    constructor(props){
        super(props);
        this.state={
            inputValue : '',
            todoList2 : []
        };
    }

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({inputValue: e.target.value})
    }
    
    onAddListItem = (e) => {
        e.preventDefault();
        let {todoList2, inputValue} = this.state;
        todoList2.push(inputValue)
        this.setState({ todoList2, inputValue: '' })
    }
  

  render() {

    return (
      <div> 
          <form>
            <input type="text" onChange={this.handleChange} value={this.state.inputValue}></input>
              <button onClick={this.onAddListItem}>send</button>
          </form>
          <ol>
              {this.state.todoList2.map((elem) => {
              return <li>{elem}</li>
              })}
          </ol>
      </div>
    );
  }
}


export default TodoList2;