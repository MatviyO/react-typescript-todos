import React, {useState, useEffect} from 'react';
import Navbar from "./component/Navbar";
import {TodoForm} from "./component/TodoForm";
import {TodoList} from "./component/TodoList";
import {ITodo} from "./interfaces";


function App() {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
        setTodos(saved)
    }, [])
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false
        }
        // setTodos([newTodo, ...todos])
        setTodos(prev => [newTodo, ...prev])
    }
    const toggleHandler = (id: number) => {
        setTodos(prev => prev.map(tod => {
            if (tod.id === id) {
                tod.completed = !tod.completed
            }
            return tod
        }))
    }
    const removeHandler = (id: number) => {
        const should = window.confirm('You want delte?')
        if (should) {
            setTodos(prev => prev.filter(todo => todo.id !== id))
        }
    }
    return (
        <>
            <Navbar/>
            <div className="container">
                <TodoForm onAdd={addHandler}/>
                <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler}/>
            </div>
        </>

    );
}

export default App;
