import React, { useState } from 'react'

const initTodos = [
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Learn Vite' },
    { id: 3, text: 'Build something awesome' },
    { id: 4, text: 'Learn Jest' },
]

function TodoApp() {
    const [todos, setTodos] = useState(initTodos)
    const [inputValue, setInputValue] = useState('')

    function handleInputValue(event) {
        setInputValue(event.target.value)
    }

    function handleAddTodo(event) {
        event.preventDefault()
        setTodos([...todos, { id: todos.length + 1, text: inputValue }])
        setInputValue('')
    }

    function handleDeleteTodo(id) {
        //const newList = todos.filter(todo => todo.id !== id) // declarative programming
        let newList = []
        // imperative programming
        for (let item of todos) {
            if (item.id === id) {
                // skip this item, right??ß 
            } else {
                // add this item to the newList
                newList.push(item)
            }
        }

        setTodos(newList)

    }

    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <h1>Todo App</h1>
                <input value={inputValue} onChange={handleInputValue} type="text" placeholder="Add a new task" />
                <button type="submit">Add Todo</button>
            </form>
            <div>
                <ul>
                    {todos.map((todo, index) =>
                        <li key={index}>
                            {todo.text}
                            <button onClick={() =>
                                handleDeleteTodo(todo.id)}
                                style={{
                                    border: "2px solid red",
                                    marginLeft: "1rem"
                                }} >
                                Delete Todo
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        </div >
    )

}

export default TodoApp