import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';
import TodoItem from './TodoItem'
import '../App.css';
import db from '../firebase';
import firebase from 'firebase';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        db.collection('todos').orderBy('timestamp','asc').onSnapshot(snapshot => {
            // gives array of object
            // console.log(snapshot.docs.map(doc => doc.data()))
            // todos.todos.todo
            setTodos(snapshot.docs.map(doc => ({ id: doc.id , todos: doc.data() }) ))
        })
    }, [input]);


    function handleChange(event) {
        setInput(event.target.value)
    }

    function handleClick(event) {
        event.preventDefault();

        db.collection('todos').add({
            todo:input,
            completed:false,

            // get a timestamp
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        // locally
        setInput('');
    }

    const TodoItemComponents = todos.map(todo =>
        // console.log(todo)
        <TodoItem item={todo} key={todo.id} handleChange={handleChange} />
    )

    return (
        <div className="main-div">
            <div className="form-div">
                <form>
                    <FormControl>
                        <InputLabel  htmlFor="my-input">Add Task</InputLabel>
                        <Input value={input} onChange={handleChange} style={{width:"500px"}} />
                    </FormControl>
                    <Button type="submit" onClick={handleClick} disabled={!input} variant="contained" color="primary">
                        Add
                    </Button>
                </form>
            </div>

            <div className="todo-list">
                {TodoItemComponents}
            </div>
        </div>
    );
}

export default TodoList;