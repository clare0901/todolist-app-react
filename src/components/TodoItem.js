import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';
import '../App.css';
import db from '../firebase'

function TodoItem(props) {
    // console.log(props.item.todos)

    const completedStyle = {
        color: "grey",
        textDecoration:"line-through",        
        fontSize:"15px"
    }

    const style = {
        color:"#000",
        fontSize:"15px",
        fontWeight:"bold"
    }

    // deletes the value in database
    function handleClick(){
        db.collection('todos').doc(props.item.id).delete();
    }

    // updates the value in database
    function handleChange(){
        db.collection('todos').doc(props.item.id).set({
            completed: !props.item.todos.completed
        },{merge:true})
    }

    return(
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={handleChange}
            />
            <span style={ props.item.todos.completed ? completedStyle : style } >{props.item.todos.todo}</span>   
            <DeleteIcon 
                onClick={handleClick}
            />
        </div>
        
    )
}

export default TodoItem