import '../../css/App.css';
import { useEffect, useState } from 'react';
import TodoForm from './TodoForm';

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


  return (
    <div className="App">
      <h1>Todo list</h1>

      {/* 
        Adding the TodoForm component as a child of the App component 
        and passing the utility function for adding new tasks as a prop-callback
      */}
      <TodoForm newTodoCallback={addNewTodo} />
    </div>
  );
}

export default App;
