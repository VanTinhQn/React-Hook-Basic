import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
// import ColorBox from './components/ColorBox';
import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'learn react' },
    { id: 2, title: 'learn Hook' },
    { id: 3, title: 'learn CSs' },
  ])
  function handleTodoClick(todo) {
    const index = todoList.findIndex((x) => x.id === todo.id)
    const newTodoList = [...todoList]
    newTodoList.splice(index, 1)
    setTodoList(newTodoList)
  }
  function handleSubmit(values) {
    const newTodo = {
      id: todoList.length + 1,
      ...values
    }
    const newTodoList = [...todoList]
    newTodoList.push(newTodo)
    setTodoList(newTodoList)
  }
  return (
    <div className="App">
      <h1>Welcome to React Hook</h1>
      <TodoForm onSubmit={handleSubmit} />
      <TodoList
        todos={todoList}
        onTodoClick={handleTodoClick}
      />
    </div>
  );
}

export default App;
