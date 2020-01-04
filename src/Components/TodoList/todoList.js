import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state={
        inputValue: '',
        todoList: []
    };
}
    
    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({inputValue: e.target.value})
    }

    onAddListItem = (e) => {
        e.preventDefault();
        let {todoList, inputValue} = this.state;
        todoList.push(inputValue)
        this.setState({ todoList, inputValue: '' })
    }

  render() {
    return (
      <div>
            <form>
                <input type="text" onChange={this.handleChange} value={this.state.inputValue}></input>
                <button onClick={this.onAddListItem}>send</button>
            </form>
            <ul>
                {this.state.todoList.map((elem) => {
                    return <li>{elem}</li>
                })}
            </ul>
      </div>
    );
  }
}


export default TodoList;