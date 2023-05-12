import { useState } from "react";


// Form component for adding new todo task
// get a callback passed for saving the newly created data in the parent storage
export default function TodoForm({newTodoCallback}) {
    // state variable to store the task description provided by the user through the input field
    const [taskDesc, setTaskDesc] = useState('');

    // onChange handler for the task description input
    const taskChangeHandler = (evt) => {
        // extract input value into constant
        const inputValue = evt.target.value;

        // save the new input value to the state variable
        setTaskDesc(inputValue);
    };

    // Submission handler for the todo form to actually add a task to the todos
    const taskSubmitHandler = (evt) => {
        // prevent the browser from reloading on submit of the form
        evt.preventDefault();

        // Call the callback for adding the task to the todos in the parent
        // and pass the task description to it
        newTodoCallback(taskDesc);

        // Reset the form
        setTaskDesc('');
    };

    return (
        <form
            onSubmit={taskSubmitHandler}
        >
            <input type="text" 
                value={taskDesc}
                onChange={taskChangeHandler}
            />
            <button type="submit">ADD</button>
        </form>
    );
}