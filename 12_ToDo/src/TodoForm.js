import React, { Component } from 'react'
import uuid from 'uuid/v4'
import './TodoForm.css'

class TodoForm extends Component {
    constructor(props) {
        super(props)

        this.state = {task:""}
    }

    handleChange = (evt)=>{
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit = (evt)=>{
        evt.preventDefault()
        this.props.createTodo({...this.state,id:uuid(),completed:false})
        this.setState({task:""})
    }

    render() {
        return (
            <form className="TodoForm" onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor='task'>New Todo</label>
                        <input 
                            type="text" 
                            placeholer="New Task" 
                            id='task'
                            name='task'
                            value={this.state.task}
                            onChange={this.handleChange}
                        />
                </div>
                
                <button>Add Todo</button>
            </form>
        )
    }
}

export default TodoForm