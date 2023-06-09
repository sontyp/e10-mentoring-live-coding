
export default function TodoItem({task, checkCallback, deleteCallback}) {

    // onChange handler for the checkbox representing the completeness state of the task
    const onCheckChangeHandler = (evt) => {
        // call appropriate call from the props and pass the task
        checkCallback(task);
    };

    // onClick handler for the deletion button to remove the task from the todo list
    const onDeleteClickHandler = (evt) => {
        // call appropriate call from the props and pass the task
        deleteCallback(task);
    };

    return (
        <li>
            <input type="checkbox" 
                checked={task.isComplete}
                onChange={onCheckChangeHandler} 
            />
            <button
                onClick={onDeleteClickHandler}
            >X</button>
            <span
                /* style={{
                    textDecoration: task.isComplete ? 'line-through' : 'none'
                }} */
                className={task.isComplete ? 'completed' : ''}
            >{task.taskDesc}</span>
            
        </li>
    );
}