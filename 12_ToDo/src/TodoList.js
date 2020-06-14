import React, { Component } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'
import './TodoList.css'

class TodoList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos:[]
        }
    }

    create = (newTodo)=>{
        this.setState({
            todos: [...this.state.todos,newTodo]
        })
    }

    remove = (id)=>{
        this.setState({
            todos:this.state.todos.filter(t => t.id !== id)
        })
    }

    update = (id,updatedTask)=>{
        const updatedTodos = this.state.todos.map(t =>{
            if(t.id === id){
                return {...t,task: updatedTask}
            }
            return t
        })

        this.setState({todos:updatedTodos})
    }

    toggleCompletion = (id)=>{
        const updatedTodos = this.state.todos.map(t =>{
            if(t.id === id){
                return {...t,completed:!t.completed}
            }
            return t
        })
        this.setState({todos:updatedTodos})
    }

    render() {
        const todos = this.state.todos.map(el => <Todo 
                                                        task={el.task} 
                                                        key={el.id} 
                                                        id={el.id} 
                                                        completed={el.completed} 
                                                        removeTodo={this.remove} 
                                                        updateTodo={this.update}
                                                        toggleTodo={this.toggleCompletion} 
                                                        />)
        return (
            <div className="TodoList">
                <h1>Todo List! <span>A Simple React Todo App</span></h1>
                <ul>{todos}</ul>
                <TodoForm createTodo={this.create} />
            </div>
        )
    }
}

export default TodoList