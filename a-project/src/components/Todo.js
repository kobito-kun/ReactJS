import React from 'react'

function Todo({todos, setTodos}) {
    const deletethis = (e) => {
        const id = e.id
        const newTodos = todos.filter(function(value, index){
            return value.id !== id
        })
        setTodos(newTodos)
        console.log(todos)
    }

    return (
        <div>
            {todos.map((e) => (
                <div className="flex">
                <p key={e.id}>{e.name}</p>
                <input type="submit" onClick={() => deletethis(e)} /> 
                </div>
            ))}
        </div>
    )
}

export default Todo
