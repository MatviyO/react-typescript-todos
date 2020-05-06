import React, {useState} from 'react';
import Navbar from "./component/Navbar";
import {TodoForm} from "./component/TodoForm";

function App() {
    const [todos, setTodos] = useState([])
    const addHandler = (title: string) => {
        console.log('add',title)
    }
    return (
        <>
            <Navbar/>
            <div className="container">
                <TodoForm onAdd={addHandler} />
            </div>
        </>

    );
}

export default App;
