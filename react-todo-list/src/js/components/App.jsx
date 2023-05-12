import '../../css/App.css';

import { useEffect, useState } from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  // state-storage for todos as an array
  const [todos, setTodos] = useState([
    {
      taskDesc: 'Do the laundry',
      isComplete: false
    },
    {
      taskDesc: 'Do the dishes',
      isComplete: true
    },
    {
      taskDesc: 'Go shopping',
      isComplete: false
    }
  ]);

  // DEBUG print-out of our stored todos
  useEffect(() => {
    console.log(todos);
  }, [todos]);


  // Utility function for adding a new task to the todos array in the state
  function addNewTodo(newTaskDesc) {
    // call the setter for the todos state variable
    setTodos(currTodos => {
      // return a new array with all previous task objects PLUS the new one
      return [
        ...currTodos,
        {
          taskDesc: newTaskDesc,
          isComplete: false
        }
      ];
    });
  }

  function checkTodo(task) {
    // create a copy of the todos array in the state
    const todosCopy = [...todos];

    // find the index of the desired todo object by comparing the values with the passed task object
    const todoIndex = todosCopy.findIndex(todo => todo.taskDesc === task.taskDesc);

    // toggle the boolean isComplete property of the desired todo object
    todosCopy[todoIndex].isComplete = !todosCopy[todoIndex].isComplete;

    // update the todos array in the state with the manipulated copy
    setTodos(todosCopy);

    // TODO check why setTodos with a callback doesn't work here
  }

  function deleteTodo(task) {
    // create a copy of the todos array in the state
    const todosCopy = [...todos];

    // find the index of the desired todo object by comparing the values with the passed task object
    const todoIndex = todosCopy.findIndex(todo => todo.taskDesc === task.taskDesc);

    // delete the desired todo object from the created todos copy
    todosCopy.splice(todoIndex, 1);

    // update the todos array in the state with the manipulated copy
    setTodos(todosCopy);
  }


  return (
    <div className="App">
      <h1>Todo list</h1>

      {/* 
        Adding the TodoForm component as a child of the App component 
        and passing the utility function for adding new tasks as a prop-callback
      */}
      <TodoForm newTodoCallback={addNewTodo} />

      <hr />

      {/* 
        Adding the TodoList component as a child of the App component 
        and passing the todos as well as the utility functions for checking off and deleting tasks as a prop-callbacks
      */}
      <TodoList todos={todos} checkCallback={checkTodo} deleteCallback={deleteTodo} />
    </div>
  );
}

export default App;
