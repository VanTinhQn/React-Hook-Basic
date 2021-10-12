import React from 'react';


function TodoList(props) {
    function handleClick(todo) {
        props.onTodoClick(todo)
    }
    return (
        <div>
            <ul>
                {props.todos.map((todo) => (
                    <li
                        key={todo.id}
                        onClick={() => handleClick(todo)}
                    >
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;