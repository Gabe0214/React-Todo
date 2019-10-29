import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'



const data = [
  {
    todo: 'Clean The House',
    id: 0,
    complete: false
  },
  {
    todo: 'Take Out Trash',
    id: 2,
    complete: false
  },
  {
    todo: 'Walk The Dog',
    id: 3,
    complete: false
  },
]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
      todoList: data,
      todo: ''
    }
  }
    

  addTodo = todo => {
    const newTodo = {
      todo: todo,
      id: Date.now(),
      complete: false
    }
    this.setState({
      todoList: [...this.state.todoList, newTodo]
    })
  }
   todoToggle = id => {
     this.setState({
       todoList: this.state.todoList.map(todo => {
         
       
         if(todo.id === id) {
           return {
             ...todo,
             complete : !todo.completed 
           }
         } else {
           return todo 
         }
       })
     })
   }

   filterCompleted = e => {
     this.setState({
       todoList: this.state.todoList.filter(todo => {
         if(todo.complete === false){
           return todo 
         }
         else{
           return ''; 
         }
       })
     })
   } 

  render() {
    return (
      <div>
        
        <TodoList todoList ={this.state.todoList} toggleTodo={this.todoToggle}/> 
        <TodoForm addTodo ={this.addTodo } filterCompleted ={this.filterCompleted}/> 
      </div>
    );
  }
}

export default App;
