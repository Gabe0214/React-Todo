// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'
import styled from 'styled-components'

const TitleStyle = styled.h1`
text-align: center;
color: #20A6DC;

`

const TodoList = props => {


    return (
        <div>
          <TitleStyle>Todo List</TitleStyle>  
        {props.todoList.map(todo => (
           <Todo todo ={todo} id ={todo.id} toggleTodo ={props.toggleTodo}/>
        ))}
        </div>
    )
  
  }

  export default TodoList; 


