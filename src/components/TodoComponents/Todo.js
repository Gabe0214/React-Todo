import React from 'react'
import styled from 'styled-components'


const TodoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    text-align: center; 
`





const Todo = props => {
 return (
     <TodoContainer onClick ={() => props.toggleTodo(props.todo.id)} style = {{textDecoration: props.todo.complete ? 'line-through' : ''}} key ={props.todo.id}>
         <h3>{props.todo.todo}</h3>
     </TodoContainer>
 )
}


export default Todo
