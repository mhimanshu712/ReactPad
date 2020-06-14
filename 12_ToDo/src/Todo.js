import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isEditing: false,
            task: this.props.task
        }
    }

    handleClick = (evt)=>{
        this.props.removeTodo(this.props.id)
    }

    toggleForm = ()=>{
        this.setState({isEditing:!this.state.isEditing})
    }

    handleUpdate = (evt)=>{
        evt.preventDefault()
        this.props.updateTodo(this.props.id,this.state.task)
        this.setState({isEditing:false})
    }

    handleChange = (evt)=>{
        this.setState(
            { task:evt.target.value }
        )
    }

    toggleTask = ()=>{
        this.props.toggleTodo(this.props.id)
    }

    render() {
         const editMode = <div className="Todo">
                            <form onSubmit={this.handleUpdate} className="Todo-edit-form">
                                <input type="text" value={this.state.task} name="task"
                                onChange={this.handleChange}></input>
                                <button>Save</button>
                            </form>
                          </div>

         const textMode = <div className="Todo">
                            <li className={this.props.completed?"Todo-task completed":"Todo-task"} onClick={this.toggleTask}>{this.props.task}</li>
                            <div className="Todo-buttons">
                                <button onClick={this.toggleForm}>
                                    <i className='fas fa-pen'/>
                                </button>
                                <button onClick={this.handleClick}>
                                    <i className='fas fa-trash'></i>
                                </button>
                            </div>
                         </div>
        return (
            <div>
                {(this.state.isEditing)?editMode:textMode}
            </div>
        )
    }
}

export default Todo