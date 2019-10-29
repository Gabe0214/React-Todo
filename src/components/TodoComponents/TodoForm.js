import React from 'react'
import styled from 'styled-components'


const ItemContainer = styled.div`

display: flex;
flex-direction: column;
justify-content: center; 
max-width: 100%;
margin: 0 auto;


`

const FormContainer = styled.form`

display: flex;
flex-direction: column;
justify-content: center
align-content: center; 


`

const Button = styled.button`

padding: 0.5rem 1.2rem;
margin-bottom: 0.5rem
border: none;
border-radius: 5px; 
background: #20A6DC;
color: #fff;
`

const Input = styled.input`
padding: 0.5rem 1.2rem;
margin-bottom: 0.5rem;
border: 1px solid black;
border-radius: 5px;

`


class TodoForm extends React.Component{
    constructor(){
        super()
        this.state = {
            newTodo: '',
            

        }
    }

      onSubmit = e => {
          e.preventDefault();
          console.log('Its Working');
         this.props.addTodo(this.state.newTodo)
         this.setState({newTodo: '',});
      }

      handleChange = e => {
          this.setState({
              newTodo: e.target.value
          }  )

      }
      filterCompleted = e => {
          e.preventDefault();
          this.props.filterCompleted();
      }
      

    render(){
        return(
            <div>
                <FormContainer>
                    <ItemContainer>
                <Input type ='text' name ='todo' onChange ={this.handleChange}
                value ={this.state.newTodo}
                />
                <Button onClick ={this.onSubmit}>Add Todo</Button>
                <Button onClick ={this.filterCompleted}>Clear Completed</Button>
                </ItemContainer>
                </FormContainer>
                 
            </div>
        )
    }
}


export default TodoForm; 